import deribit from '../deribit'

export const getInstruments = async (currency: string, expired: boolean, kind: string) => {
  return await deribit.get('/public/get_instruments', { params: { currency, expired, kind } })
}
