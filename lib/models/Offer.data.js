import { applyOfferDefaults } from './Offer.schema.js'
import { BigNumber } from 'bignumber.js'

export const OfferValidSamples = [
  {
    amountProvided: new BigNumber('10.0'), // quantity of base asset that was provided to be bought by liquidity provider
    amountReserved: new BigNumber('1.0'), // quantity of base asset that was reserved by traders
    amountUtilized: new BigNumber('0'), // quantity of base asset that was utilized (sold) by traders
    guaranteedPrice: new BigNumber('2000.0'),
    protectionPrice: new BigNumber('50.0'),
    expirationDate: new Date('2021-07-30T12:00:00'),
    isWithdrawn: false,
    owner: '0xa7e6b2ce535b83e82ab598e9e432705f8d7ce929',
    base: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // WETH
    quote: '0xdac17f958d2ee523a2206206994597c13d831ec7', // USDT
  },
].map(applyOfferDefaults)

export const OfferInvalidSamples = [].map(applyOfferDefaults)
