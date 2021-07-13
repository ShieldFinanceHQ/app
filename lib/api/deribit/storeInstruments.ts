import { promises as fs } from 'fs'
import fsnode from 'fs'
import path from 'path'
import os from 'os'
import * as Sentry from '@sentry/nextjs'
import deribit from '../deribit'

export const getInstruments = async (currency: string, expired: boolean, kind: string) => {
  return await deribit.get('/public/get_instruments', { params: { currency, expired, kind } })
}

export const storeInstruments = async (currency: string, expired: boolean, kind: string) => {
  const res = await getInstruments(currency, expired, kind)
  // axios will throw an exception if response status is erroneous

  const dataDirectory = os.tmpdir()

  const filename = 'sf_instruments.json'

  const filePath = path.join(dataDirectory, filename)

  const fileExists = !!await fsnode.existsSync(filePath)

  const existingRawFileData = fileExists ? await fs.readFile(filePath, 'utf8') : ''

  const existingFileData = existingRawFileData.length > 0 ? JSON.parse(existingRawFileData) : {}

  if (currency === 'BTC') {
    existingFileData.BTC = res.data.result.filter((instrument) => instrument.instrument_name.endsWith('-P'))
  } else if (currency === 'ETH') {
    existingFileData.ETH = res.data.result.filter((instrument) => instrument.instrument_name.endsWith('-P'))
  }

  await fs.writeFile(filePath, JSON.stringify(existingFileData, null, 2))

  return true
}
