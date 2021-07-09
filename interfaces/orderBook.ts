interface statsType {
  volume: Number;
  price_change: Number;
  low: Number;
  high: Number;
}

interface greeksType {
  delta: Number;
  gamma: Number;
  rho: Number;
  theta: Number;
  vega: Number;
}

export interface orderBookType {
  underlying_price: Number;
  underlying_index: Number;
  timestamp: Number;
  stats: statsType;
  state: String;
  settlement_price: Number;
  open_interest: Number;
  min_price: Number;
  max_price: String;
  mark_price: Boolean;
  mark_iv: String;
  last_price: Number;
  interest_rate: Number;
  instrument_name: String;
  index_price: Number;
  greeks: greeksType;
  estimated_delivery_price: Number;
  change_id: Number;
  bids: Number[][];
  bid_iv: Number;
  best_bid_price: Number;
  best_bid_amount: Number;
  best_ask_price: Number;
  best_ask_amount: Number;
  asks: Number[][];
  ask_iv: Number;
}

export type orderBooksType = orderBookType[];
