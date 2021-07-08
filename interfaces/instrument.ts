export interface instrumentType {
  tick_size: Number;
  taker_commision: Number;
  strike: Number;
  settlement_period: String;
  quote_currency: String;
  option_type: String;
  min_trade_amount: Number;
  maker_commission: Number;
  kind: String;
  is_active: Boolean;
  instrument_name: String;
  expiration_timestamp: Number;
  creation_timestamp: Number;
  contract_size: Number;
  block_trade_commission: Number;
  base_currency: String;
}
export interface instrumentsType {
  [currency: string]: instrumentType[];
}
