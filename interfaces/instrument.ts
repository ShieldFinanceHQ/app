export interface instrumentType {
  instrument_name: String;
  kind: String;
  option_type: String;
  base_currency: String;
  quote_currency: String;
  maker_commission: Number;
  taker_commision: Number;
  block_trade_commission: Number;
  tick_size: Number;
  contract_size: Number;
  strike: Number;
  settlement_period: String;
  min_trade_amount: Number;
  is_active: Boolean;
  expiration_timestamp: Number;
  creation_timestamp: Number;
}
export interface instrumentTypes {
  [currency: string]: instrumentType[];
}
