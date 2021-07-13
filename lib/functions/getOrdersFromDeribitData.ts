import { flatten } from 'lodash'
import { OrderBook } from '../api/deribit/interfaces/OrderBook'
import { Order } from '../interfaces/Order'
import { Instrument } from '../api/deribit/interfaces/Instrument'

export async function getOrdersFromDeribitData(instrumentsMap: { [currency: string]: Instrument[] }, orderbooks: OrderBook[], BTCUSDPrice: number) {
  return flatten(orderbooks.map((ob) => {
    const [base] = ob.instrument_name.split('-')
    const instruments = instrumentsMap[base]
    const instrument = instruments.find((i) => i.instrument_name === ob.instrument_name)
    const quote = 'USDT' // on Deribit it's USD, but we will accept payments in USDT & assume that USDT will maintain its peg
    return ob.asks.map(function ([price, amount]): Order {
      return {
        base,
        quote,
        protectionAmount: amount,
        protectionPrice: price * BTCUSDPrice,
        guaranteedPrice: instrument.strike,
        expirationDate: new Date(instrument.expiration_timestamp),
      }
    })
  }))
}
