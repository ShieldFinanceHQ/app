import axios from "axios";
import * as Sentry from "@sentry/nextjs";
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

const getOrderBook = async (instrument_name: String) => {
  const url = `${process.env.DERIBIT_API_URL}/public/get_order_book?instrument_name=${instrument_name}`;

  try {
    let res = await axios.get(url);
    return res.data.result;
  } catch (err) {
    console.log("Error: ", err);
    Sentry.captureException(err);
  }
};

export const storeOrderBooks = async () => {
  const dataDirectory = os.tmpdir();

  const filename = "sf_instruments.json";

  const filePath = path.join(dataDirectory, filename);

  const instrumentsRawData = (await checkFile(filePath)) ? await fs.readFile(filePath, "utf8") : "";

  const instrumentsData = instrumentsRawData.length > 0 ? JSON.parse(instrumentsRawData) : {};

  const instruments =
    instrumentsData.BTC && instrumentsData.ETH
      ? [...instrumentsData.BTC, ...instrumentsData.ETH]
      : instrumentsData.BTC
      ? [...instrumentsData.BTC]
      : instrumentsData.ETH
      ? [...instrumentsData.BTC]
      : null;

  // console.log("length", instruments.length);

  if (instruments !== null) {
    const orders = await Promise.all(instruments.map((instrument) => getOrderBook(instrument.instrument_name)));
    const targetDataDirectory = os.tmpdir();
    const targetFilename = "sf_orders.json";
    const targetFilePath = path.join(targetDataDirectory, targetFilename);
    const data = orders;
    fs.writeFile(targetFilePath, JSON.stringify(data));
    return true;
  } else {
    return false;
  }
};
