import Ajv from "ajv";
import addFormats from "ajv-formats";
import definitions from "ajv-keywords/dist/definitions";

export const ajv = new Ajv({
  allErrors: true,
  useDefaults: true,
  $data: true,
  keywords: definitions({}),
});
addFormats(ajv);

export const schemaBasePath = "https://playbook.io/schemas";

export const getSchemaId = function (path) {
  return schemaBasePath + path;
};
