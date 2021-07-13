import { test } from '@jest/globals'
import { expect } from '../util/expect'
import { promises as fs } from 'fs'
import { getOrdersFromDeribitData } from './getOrdersFromDeribitData'

test('should get orders from Deribit data', async function () {
  const instrumentsMap = {
    BTC: JSON.parse(await fs.readFile(`lib/api/deribit/fixtures/get_instruments_BTC.json`, 'utf8')),
    ETH: JSON.parse(await fs.readFile(`lib/api/deribit/fixtures/get_instruments_ETH.json`, 'utf8')),
  }
  const orderbooks = JSON.parse(await fs.readFile(`lib/api/deribit/fixtures/get_order_book.json`, 'utf8'))
  const orders = await getOrdersFromDeribitData(instrumentsMap, orderbooks)
  expect(orders.length).to.be.greaterThan(10)
})
