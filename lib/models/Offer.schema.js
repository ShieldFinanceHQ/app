import { BigNumber } from 'bignumber.js'
import { ajv, getSchemaId } from '../util/ajv.ts'

export const OfferSchema = {
  $async: true,
  $id: getSchemaId(__filename),
  title: 'offer',
  type: 'object',
  properties: {
    amountProvided: { type: 'object', instanceof: 'BigNumber' }, // quantity of base asset that was provided to be bought by liquidity provider
    amountReserved: { type: 'object', instanceof: 'BigNumber' }, // quantity of base asset that was reserved by traders
    amountUtilized: { type: 'object', instanceof: 'BigNumber' }, // quantity of base asset that was utilized (sold) by traders
    guaranteedPrice: { type: 'object', instanceof: 'BigNumber' },
    protectionPrice: { type: 'object', instanceof: 'BigNumber' },
    expirationDate: { type: 'object', instanceof: 'Date' },
    isWithdrawn: { type: 'boolean' },
    owner: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$' },
    base: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$' },
    quote: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$' },
  },
  allRequired: true,
}

export const validateOffer = ajv.compile(OfferSchema)

export const getOfferErrors = async function (offer) {
  return validateOffer(offer).then(() => []).catch((error) => error.errors || error)
}

export const applyOfferDefaults = (offer) => Object.assign({}, offer)
