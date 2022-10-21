import React, { useState } from 'react'

import StripeTestCards from '../components/StripeTestCards'

import getStripe from '../utils/get-stripe'
import { fetchPostJSON } from '../utils/api-helpers'
import { formatAmountForDisplay } from '../utils/stripe-helpers'
import * as config from '../config'

const CheckoutForm = () => {
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState({
    customDonation: Math.round(config.MAX_AMOUNT / config.AMOUNT_STEP),
  })

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Create a Checkout Session.
    const response = await fetchPostJSON('/api/checkout_sessions', {
      amount: input.customDonation,
    })

    if (response.statusCode === 500) {
      console.error(response.message)
      return
    }

    // Redirect to Checkout.
    const stripe = await getStripe()
    const { error } = await stripe!.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: response.id,
    })
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message)
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit}>
        <button
            className="p-4 w-72 md:w-96 rounded-md bg-green-100 hover:bg-green-200 text-white text-bold text-xl uppercase sm:text-sm"
            type="submit"
            disabled={loading}
        >
          Adquirir Reto!!
        </button>
    </form>
  )
}

export default CheckoutForm