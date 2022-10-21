import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
interface SheetForm {
  name: string;
  email: string;
  lastname: string;
  movement: string;
  service: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ msg: "Method not allowed" });
  }
  let body = req.body as SheetForm;

  try {
    let auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });
    let sheet = google.sheets({ version: "v4", auth });
    let response = await sheet.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:E1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [body.service, body.movement, body.email, body.name, body.lastname],
        ],
      },
    });
    return res.status(200).json({
      msg: "OK",
      data: response.data,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      msg: "Internal server error",
      data: e,
    });
  }
}
