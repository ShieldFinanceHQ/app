import { test } from '@jest/globals'
import { expect } from '../util/expect'
import { promises as fs } from 'fs'
import { getOrdersFromDeribitData } from './getOrdersFromDeribitData'
import { Order } from '../interfaces/Order'

test('should get orders from Deribit data', async function () {
  const instrumentsMap = {
    BTC: JSON.parse(await fs.readFile(`lib/api/deribit/fixtures/BTC_put_instruments.json`, 'utf8')),
    ETH: JSON.parse(await fs.readFile(`lib/api/deribit/fixtures/ETH_put_instruments.json`, 'utf8')),
  }
  const orderbooks = JSON.parse(await fs.readFile(`lib/api/deribit/fixtures/all_put_orderbooks.json`, 'utf8'))
  const orders = await getOrdersFromDeribitData(instrumentsMap, orderbooks, 33000.50)
  expect(orders.length).to.be.greaterThan(10)
  expect(orders).to.deep.include({
    base: 'BTC',
    quote: 'USDT',
    protectionAmount: 66.8,
    protectionPrice: 0.002 * 33000.50,
    guaranteedPrice: 28000,
    expirationDate: new Date(1626422400000)
  } as Order)
  expect(orders).to.deep.include({
    base: 'ETH',
    quote: 'USDT',
    protectionAmount: 458,
    protectionPrice: 0.0805 * 33000.50,
    guaranteedPrice: 1800,
    expirationDate: new Date(1630051200000)
  } as Order)
})
