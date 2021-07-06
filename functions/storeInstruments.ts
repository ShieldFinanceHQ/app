import axios from "axios";
import { promises as fs } from "fs";
import path from "path";

export const storeInstruments = async (currency: String, expired: Boolean, kind: String) => {
  const url = `${process.env.DERIBIT_API_URL}/public/get_instruments?currency=${currency}&expired=${expired}&kind=${kind}`;

  try {
    let res = await axios.get(url);
    if (res.status === 200) {
      const dataDirectory = path.join(process.cwd(), "data");
      const filename = "instruments.json";
      const filePath = path.join(dataDirectory, filename);

      const existingRawFileData = await fs.readFile(filePath, "utf8");

      const existingFileData = existingRawFileData.length > 0 ? JSON.parse(existingRawFileData) : {};

      if (currency === "BTC") {
        existingFileData.BTC = res.data.result.filter((instrument) => instrument.instrument_name.endsWith("-P"));
      } else if (currency === "ETH") {
        existingFileData.ETH = res.data.result.filter((instrument) => instrument.instrument_name.endsWith("-P"));
      }

      // storing only put option instruments

      const data = existingFileData;
      fs.writeFile(filePath, JSON.stringify(data));
    }
  } catch (err) {
    console.log(err);
  }
};
