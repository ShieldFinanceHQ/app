export const getNexusMutualOffers = async function (threats, asset, amount, profile) {
  if (countriesRestrictedByNexusMutual.includes(profile.country)) return []
  if (threats.includes('Hack')) {

  }
}

export const countriesRestrictedByNexusMutual = [/* TODO: Get from https://app.nexusmutual.io/cover/buy/membership*/]
