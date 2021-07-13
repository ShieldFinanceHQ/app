export interface Instrument {
  instrument_name: string;
  kind: string;
  option_type: string;
  base_currency: string;
  quote_currency: string;
  maker_commission: number;
  taker_commision: number;
  block_trade_commission: number;
  tick_size: number;
  contract_size: number;
  strike: number;
  settlement_period: string;
  min_trade_amount: number;
  is_active: boolean;
  expiration_timestamp: number;
  creation_timestamp: number;
}
export interface Instruments {
  [currency: string]: Instrument[];
}
