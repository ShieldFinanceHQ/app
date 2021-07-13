interface Stats {
  volume: number;
  price_change: number;
  low: number;
  high: number;
}

interface Greeks {
  delta: number;
  gamma: number;
  rho: number;
  theta: number;
  vega: number;
}

export interface OrderBook {
  instrument_name: string;
  min_price: number;
  max_price: string;
  bids: number[][];
  asks: number[][];
  stats: Stats;
  greeks: Greeks;
  mark_price: boolean;
  index_price: number;
  underlying_price: number;
  last_price: number;
  settlement_price: number;
  estimated_delivery_price: number;
  underlying_index: number;
  mark_iv: string;
  bid_iv: number;
  ask_iv: number;
  state: string;
  open_interest: number;
  interest_rate: number;
  change_id: number;
  best_bid_price: number;
  best_bid_amount: number;
  best_ask_price: number;
  best_ask_amount: number;
  timestamp: number;
}

export type OrderBooks = OrderBook[];
