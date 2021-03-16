import { ajv, getSchemaId } from '../util/ajv.js'

export const ProfileSchema = {
  $async: true,
  $id: getSchemaId(__filename),
  title: 'profile',
  type: 'object',
  properties: {
    country: { type: 'string', minLength: 2, maxLength: 2 },
  },
  allRequired: true,
}

export const validateProfile = ajv.compile(ProfileSchema)

export const getProfileErrors = async function (profile) {
  return validateProfile(profile).then(() => []).catch((error) => error.errors || error)
}

export const applyProfileDefaults = (profile) => Object.assign({}, profile)
