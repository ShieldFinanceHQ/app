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
  underlying_price: number;
  underlying_index: number;
  timestamp: number;
  stats: Stats;
  state: string;
  settlement_price: number;
  open_interest: number;
  min_price: number;
  max_price: string;
  mark_price: boolean;
  mark_iv: string;
  last_price: number;
  interest_rate: number;
  instrument_name: string;
  index_price: number;
  greeks: Greeks;
  estimated_delivery_price: number;
  change_id: number;
  bids: number[][];
  bid_iv: number;
  best_bid_price: number;
  best_bid_amount: number;
  best_ask_price: number;
  best_ask_amount: number;
  asks: number[][];
  ask_iv: number;
}

export type OrderBooks = OrderBook[];
