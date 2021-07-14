import { promises as fs } from "fs";
import path from "path";
import fsnode from "fs";
import os from "os";
import { Instrument } from "./interfaces/Instrument";

const checkFile = async (filePath: string) => {
  if (await fsnode.existsSync(filePath)) {
    return true;
  } else {
    return false;
  }
};

export const getInstrumentsFromCache = async (): Promise<Instrument[] | null> => {
  const dataDirectory = os.tmpdir();
  const filename = "sf_instruments.json";
  const filePath = path.join(dataDirectory, filename);
  await checkFile(filePath);
  if (await checkFile(filePath)) {
    const rawFileContent = await fs.readFile(filePath, "utf8");
    const fileContent = JSON.parse(rawFileContent);

    if (fileContent.BTC && fileContent.ETH) {
      return [...fileContent.BTC, ...fileContent.ETH];
    } else if (fileContent.BTC) {
      return [fileContent.BTC];
    } else if (fileContent.ETH) {
      return [fileContent.ETH];
    } else {
      return null;
    }
  } else {
    // picking files from fixtures
    const jsonDataDirectory = path.join(process.cwd(), "lib/api/deribit/fixtures");
    const filename1 = "BTC_put_instruments.json";
    const filePath1 = path.join(jsonDataDirectory, filename1);
    const filename2 = "ETH_put_instruments.json";
    const filePath2 = path.join(jsonDataDirectory, filename2);
    const rawFileContent1 = await fs.readFile(filePath1, "utf8");
    const fileContent1 = JSON.parse(rawFileContent1);
    const rawFileContent2 = await fs.readFile(filePath2, "utf8");
    const fileContent2 = JSON.parse(rawFileContent2);
    const putInstrumentsFileContent = [...fileContent1, fileContent2];

    return putInstrumentsFileContent;
  }
};
