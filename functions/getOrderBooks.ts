import { promises as fs } from "fs";
import path from "path";

export const getOrderBooks = async () => {
  const dataDirectory = path.join(process.cwd(), "data");
  const filename = "orders.json";
  const filePath = path.join(dataDirectory, filename);
  const rawFileContent = await fs.readFile(filePath, "utf8");
  const fileContent = JSON.parse(rawFileContent);

  if (fileContent) {
    return fileContent;
  } else {
    return null;
  }
};
