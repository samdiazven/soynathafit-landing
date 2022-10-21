import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: '2022-08-01',
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {

            const sessionId = req.body.sessionId as string
            const session = await stripe.checkout.sessions.retrieve(sessionId)       
    
            if(!session.payment_intent) {
    
                return res.status(200).json({data: "error"})
            }
            const payment = await stripe.paymentIntents.retrieve(session.payment_intent as string)
    
            if(payment.status === "succeeded"){
                return res.status(200).json({status: "success"})
            }
    
            return res.status(200).json({status: "error"})
        }catch(error) {
            return res.status(200).json({status: "errpr"})
        }
    }
}