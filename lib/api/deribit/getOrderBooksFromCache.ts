import { promises as fs } from "fs";
const fsnode = require("fs");
import path from "path";
const os = require("os");

const checkFile = async (filePath: string) => {
  if (await fsnode.existsSync(filePath)) {
    return true;
  } else {
    return false;
  }
};

export const getOrderBooksFromCache = async () => {
  const dataDirectory = os.tmpdir();
  const filename = "sf_orderbooks.json";
  const filePath = path.join(dataDirectory, filename);
  if (await checkFile(filePath)) {
    const rawFileContent = await fs.readFile(filePath, "utf8");
    const fileContent = JSON.parse(rawFileContent);

    if (fileContent) {
      return fileContent;
    } else {
      return null;
    }
  } else {
    return null;
  }
};
