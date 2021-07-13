import axios from 'axios'
import * as Sentry from '@sentry/nextjs'
import { promises as fs } from 'fs'
import fsnode from 'fs'
import path from 'path'
import os from 'os'
import pLimit from 'p-limit'

// TODO: Refactor like in storeInstruments

const getOrderBook = async (instrument_name: string) => {
  const url = `${process.env.DERIBIT_API_URL}/public/get_order_book?instrument_name=${instrument_name}`

  try {
    const res = await axios.get(url)
    return res.data.result
  } catch (err) {
    console.log('Error: ', err)
    Sentry.captureException(err)
  }
}

export const storeOrderBooks = async () => {
  const dataDirectory = os.tmpdir()

  const filename = 'sf_instruments.json'

  const filePath = path.join(dataDirectory, filename)

  const fileExists = !!await fsnode.existsSync(filePath)

  const instrumentsRawData = fileExists ? await fs.readFile(filePath, 'utf8') : ''

  const instrumentsData = instrumentsRawData.length > 0 ? JSON.parse(instrumentsRawData) : {}

  const instruments =
    instrumentsData.BTC && instrumentsData.ETH
      ? [...instrumentsData.BTC, ...instrumentsData.ETH]
      : instrumentsData.BTC
      ? [...instrumentsData.BTC]
      : instrumentsData.ETH
        ? [...instrumentsData.BTC]
        : null

  // console.log("length", instruments.length);

  if (instruments !== null) {
    const limit = pLimit(5)
    const orders = await Promise.all(instruments.map((instrument) => limit(() => getOrderBook(instrument.instrument_name))))
    const targetDataDirectory = os.tmpdir()
    const targetFilename = 'sf_orderbooks.json'
    const targetFilePath = path.join(targetDataDirectory, targetFilename)
    await fs.writeFile(targetFilePath, JSON.stringify(orders, null, 2))
    return true
  } else {
    return false
  }
}
