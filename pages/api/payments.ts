import paypal from "@paypal/checkout-server-sdk";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Creating an environment
  let clientId =
    "AZ3z_OENi1ENfiaHultGDhQIRmaNclXyvmB3y5ue-ndkv7gLW0Qv6g0jiPqFUxy8trc_pvuGfSG5EM88";
  let clientSecret =
    "EGxlEyF2HJpkk9BrGmPRL0Wipw_bOwt_ZB62INZe6cw3L0gRvY7PrTqv_20wZcyoLVPxGOkkzEVs6bGV";

  // This sample uses SandboxEnvironment. In production, use LiveEnvironment
  let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
  let client = new paypal.core.PayPalHttpClient(environment);

  if (req.method === "POST") {
    let request = new paypal.orders.OrdersCreateRequest();
    request.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "9.00",
          },
        },
      ],
    });
    let response = await client.execute(request);

    return res.json({ id: response.result.id });
  }
}
