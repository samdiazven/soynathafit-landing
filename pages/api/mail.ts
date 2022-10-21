import { NextApiRequest, NextApiResponse } from "next";
import { config } from "dotenv";
const nodemailer = require("nodemailer");

interface Body {
  name: string;
  email: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ msg: "Method not allowed" });
  }
  config();

  let body = req.body as Body;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "samueldiazkoc@gmail.com",
      pass: process.env.MAIL_PASSWORD,
    },
  });

  // verify connection configuration
  transporter.verify(function (error: Error, success: any) {
    if (error) {
      return res
        .status(400)
        .json({ msg: `Verificacion de email incorrecta ${error}` });
    }
  });

  try {
    const mailData = {
      from: "samueldiazkoc@gmail.com",
      to: body.email,
      subject: "My subject",
      text: body.name,
      html: `Hello ${body.name} your payment was succesful`,
      attachments: [
        {
          path: "https://drive.google.com/uc?export=download&id=1uYRy7upmcTNoSIBIYjIAlwqwlzhcnKXK",
          contentType: "application/pdf",
          filename: "contrato.pdf",
        },
      ],
    };

    transporter.sendMail(mailData, (err: Error, info: string) => {
      if (err) {
        console.error(err);
         res.status(400).json({
          msg: err,
        });
        return
      }
       res.status(200).json({});
    });
    // })
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      msg: "Internal server error",
      data: e,
    });
  }
}
