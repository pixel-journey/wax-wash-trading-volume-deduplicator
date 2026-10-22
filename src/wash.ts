/**
 * Gross volume minus both legs of a two-way sale.
 * The sales are arguments. No market is scanned.
 */

const NAME = /^(?!.*\.\.)(?!\.)(?!.*\.$)[a-z1-5.]{1,12}$/;

export function organic(sales: readonly { seller: string; buyer: string; amount: number }[]): { ok: false; reason: string } | { ok: true; gross: number; wash: number; organic: number } {
  if (sales.length < 1 || sales.length > 30) return { ok: false, reason: "pass 1 to 30 sales" };
  const dir = new Map<string, number>();
  let gross = 0;
  let wash = 0;
  for (const sale of sales) {
    if (!NAME.test(sale.seller) || !NAME.test(sale.buyer)) return { ok: false, reason: "seller and buyer must be Antelope names" };
    if (!Number.isInteger(sale.amount) || sale.amount < 1 || sale.amount > 1_000_000_000_000) return { ok: false, reason: "amount must be an integer from 1 to 1000000000000" };
    gross += sale.amount;
    if (sale.seller === sale.buyer) {
      wash += sale.amount;
      continue;
    }
    const key = `${sale.seller}|${sale.buyer}`;
    dir.set(key, (dir.get(key) ?? 0) + sale.amount);
  }
  const seen = new Set<string>();
  for (const key of dir.keys()) {
    const [seller, buyer] = key.split("|");
    const pair = seller < buyer ? `${seller}|${buyer}` : `${buyer}|${seller}`;
    if (seen.has(pair)) continue;
    seen.add(pair);
    const low = seller < buyer ? seller : buyer;
    const high = seller < buyer ? buyer : seller;
    const forward = dir.get(`${low}|${high}`) ?? 0;
    const back = dir.get(`${high}|${low}`) ?? 0;
    if (forward > 0 && back > 0) wash += 2 * Math.min(forward, back);
  }
  return { ok: true, gross, wash, organic: gross - wash };
}
