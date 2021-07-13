import { flatten } from 'lodash'
import { getCoverProtocolOffers } from './getCoverProtocolOffers.js'
import { getHegicOffers } from './getHegicOffers.js'
import { getNexusMutualOffers } from './getNexusMutualOffers.js'
import { getOpynOffers } from './getOpynOffers.js'

export const getInsuranceOffers = async function (threats, asset, amount, profile) {
  return Array.prototype.concat(
    await getNexusMutualOffers(threats, asset, amount, profile),
    await getCoverProtocolOffers(threats, asset, amount, profile),
    await getOpynOffers(threats, asset, amount, profile),
    await getHegicOffers(threats, asset, amount, profile),
  )
}
