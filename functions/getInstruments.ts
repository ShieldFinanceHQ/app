import { promises as fs } from "fs";
import path from "path";
const os = require("os");
import { instrumentType } from "../interfaces/instrument";

export const getInstruments = async (): Promise<instrumentType[]> => {
  const dataDirectory = os.tmpdir();
  const filename = "sf_instruments.json";
  const filePath = path.join(dataDirectory, filename);
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
};
