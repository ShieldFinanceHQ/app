import { promises as fs } from "fs";
import path from "path";
const fsnode = require("fs");
const os = require("os");
import { Instrument } from "../interfaces/instrument";

const checkFile = async (filePath: string) => {
  if (await fsnode.existsSync(filePath)) {
    return true;
  } else {
    return false;
  }
};

export const getInstruments = async (): Promise<Instrument[] | null> => {
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
    return null;
  }
};
