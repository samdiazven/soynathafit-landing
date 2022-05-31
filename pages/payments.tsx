import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import axios from "axios";

function Payments() {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
      }}
    >
      <PayPalScriptProvider
        options={{
          "client-id":
            "AZ3z_OENi1ENfiaHultGDhQIRmaNclXyvmB3y5ue-ndkv7gLW0Qv6g0jiPqFUxy8trc_pvuGfSG5EM88",
        }}
      >
        <PayPalButtons
          createOrder={async () => {
            try {
              let res = await axios.post("/api/payments");
              return res.data.id;
            } catch (error) {
              console.log(error);
            }
          }}
          onCancel={() => console.log("cancel order")}
          onApprove={async (data, actions) => {
            let payment = await actions.order?.capture();
            console.log(payment);
          }}
          style={{ layout: "vertical" }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default Payments;
