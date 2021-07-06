import { promises as fs } from "fs";
import path from "path";
const os = require("os");

export const getOrderBooks = async () => {
  const dataDirectory = os.tmpdir();
  const filename = "sf_orders.json";
  const filePath = path.join(dataDirectory, filename);
  const rawFileContent = await fs.readFile(filePath, "utf8");
  const fileContent = JSON.parse(rawFileContent);

  if (fileContent) {
    return fileContent;
  } else {
    return null;
  }
};
