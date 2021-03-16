import { AssetValidSamples, AssetInvalidSamples } from './Asset.data.js'
import { getAssetErrors } from './Asset.schema.js'

test.each(AssetValidSamples)('Asset valid sample matches schema', async function (sample) {
  const errors = await getAssetErrors(sample)
  if (errors.length) console.warn(sample)
  await expect(errors).toEqual([])
})

test.each(AssetInvalidSamples)('Asset invalid sample does not match schema', async function (sample) {
  const errors = await getAssetErrors(sample)
  if (!errors.length) console.warn(sample)
  await expect(errors).not.toEqual([])
})
