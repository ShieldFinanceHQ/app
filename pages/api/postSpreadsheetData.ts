import * as Sentry from "@sentry/nextjs";
import { withSentry } from "@sentry/nextjs";
import { GoogleSpreadsheet } from "google-spreadsheet";

const appendSpreadsheet = async (row) => {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID);
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    });
    // loads document properties and worksheets
    await doc.loadInfo();
    const sheet = doc.sheetsById[3456];
    const result = await sheet.addRow(row);
    return true;
  } catch (error) {
    console.error("Error: ", error);
    Sentry.captureException(error);
    return false;
  }
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const newRow = req.body;
    const result = await appendSpreadsheet(newRow);
    if (result) res.status(200).json({ msg: "Row appended" });
    else {
      res.status(400).json({ msg: "Row append failed" });
    }
  } else {
    res.status(400).json({ msg: "Wrong method" });
    Sentry.captureException("Wrong method for post api/postSpreadSheetData");
  }
};

export default withSentry(handler);
