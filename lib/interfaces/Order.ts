import { AssetName } from './Asset'

export interface Order {
  base: AssetName,
  quote: AssetName,
  protectionAmount: number, // quantity of base asset that can be protected by liquidity provider
  protectionPrice: number, // quantity of quote asset per 1 base asset that is given by trader to liquidity provider when the trader buys protection (aka "option premium")
  guaranteedPrice: number, // quantity of quote asset per 1 base asset that is given by liquidity provider to trader when the trader uses protection (aka "option strike price")
  expirationDate: Date, // date before or at which trader can use protection
}
