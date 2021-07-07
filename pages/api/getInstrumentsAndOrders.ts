import { withSentry } from "@sentry/nextjs";
import { storeInstruments } from "../../functions/storeInstruments";
import { storeOrderBooks } from "../../functions/storeOrderBooks";

const handler = async (req, res) => {
  const res1 = await storeInstruments("BTC", false, "option");
  const res2 = await storeInstruments("ETH", false, "option");
  if (res1 && res2) {
    storeOrderBooks();
  }
  res.status(200).json({ msg: "Storing data in files!" });
};

export default withSentry(handler);
