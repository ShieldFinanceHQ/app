import { ajv, getSchemaId } from '../util/ajv'
import { AsyncValidateFunction } from "ajv/lib/types/index";

export const AssetSchema = {
  $async: true,
  $id: getSchemaId(__filename),
  title: 'asset',
  type: 'object',
  properties: {
    name: { type: 'string', minLength: 1 },
    symbol: { type: 'string', minLength: 1 },
    address: { type: 'string', pattern: '^0x[a-fA-F0-9]{40}$' },
  },
  allRequired: true,
}

export const validateAsset = ajv.compile(AssetSchema) as AsyncValidateFunction

export const getAssetErrors = async function (asset) {
  return validateAsset(asset).then(() => []).catch((error) => error.errors || error)
}

export const applyAssetDefaults = (asset) => Object.assign({}, asset)
