import { storeInstruments } from "../../functions/storeInstruments";
import { storeOrderBooks } from "../../functions/storeOrderBooks";

export default async (req, res) => {
  storeInstruments("BTC", false, "option");
  storeInstruments("ETH", false, "option");
  storeOrderBooks();
  res.status(200).json({ msg: "Storing data in files!" });
};
