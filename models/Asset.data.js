import { applyAssetDefaults } from './Asset.schema.js'

export const AssetValidSamples = [
  {
    name: 'Nexus Mutual',
    symbol: 'NXM',
    address: '0xd7c49cee7e9188cca6ad8ff264c1da2e69d4cf3b',
  },
  {
    name: 'Wrapped Ether',
    symbol: 'WETH',
    address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  },
].map(applyAssetDefaults)

export const AssetInvalidSamples = [
  {
    // empty name
    name: '',
    symbol: 'NXM',
    address: '0xd7c49cee7e9188cca6ad8ff264c1da2e69d4cf3b',
  },
  {
    name: 'Nexus Mutual',
    // empty symbol
    symbol: '',
    address: '0xd7c49cee7e9188cca6ad8ff264c1da2e69d4cf3b',
  },
  {
    name: 'Nexus Mutual',
    symbol: 'NXM',
    // empty address
    address: '',
  },
  {
    name: 'Nexus Mutual',
    symbol: 'NXM',
    // invalid address
    address: '0xINVALID',
  }
].map(applyAssetDefaults)
