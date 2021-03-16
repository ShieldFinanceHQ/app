import Ajv from 'ajv'
import addFormats from "ajv-formats"
import path from 'path'

export const ajv = new Ajv({
  allErrors: true,
  useDefaults: true,
  $data: true,
  keywords: require('ajv-keywords/dist/definitions')({}),
})
addFormats(ajv)

export const schemaBasePath = 'https://playbook.io/schemas'

export const getSchemaId = function (path) {
  return schemaBasePath + path
}
