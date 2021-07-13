import axios from "axios";
import { promises as fs } from "fs";
import fsnode from "fs";
import path from "path";
import os from "os";

const checkFile = async (filePath: string) => {
  if (await fsnode.existsSync(filePath)) {
    return true;
  } else {
    return false;
  }
};

export const storeInstruments = async (currency: string, expired: boolean, kind: string) => {
  const url = `${process.env.DERIBIT_API_URL}/public/get_instruments?currency=${currency}&expired=${expired}&kind=${kind}`;

  const res = await axios.get(url);
  if (res.status === 200) {
    const dataDirectory = os.tmpdir();

    const filename = "sf_instruments.json";

    const filePath = path.join(dataDirectory, filename);

    const fileExists = await checkFile(filePath);

    const existingRawFileData = fileExists ? await fs.readFile(filePath, "utf8") : "";

    const existingFileData = existingRawFileData.length > 0 ? JSON.parse(existingRawFileData) : {};

    if (currency === "BTC") {
      existingFileData.BTC = res.data.result.filter((instrument) => instrument.instrument_name.endsWith("-P"));
    } else if (currency === "ETH") {
      existingFileData.ETH = res.data.result.filter((instrument) => instrument.instrument_name.endsWith("-P"));
    }

    // storing only put option instruments

    const data = existingFileData;
    await fs.writeFile(filePath, JSON.stringify(data));
    return true;
  }
};
