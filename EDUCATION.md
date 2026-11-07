# Education — subtract the round trip, ignore the clock

> **Rung:** `npm test` runs `src/wash.test.ts` (and the other `src/**/*.test.ts` files).  
> **The test is the rule.** No market is scanned.

`organic` takes 1 to 30 sales. Each sale is `{ seller, buyer, amount }`. `amount` is an integer from 1 to `1_000_000_000_000`. Names match `a-z`, `1-5`, and single dots, length 1 to 12. A bad row returns `{ ok: false, reason }` and does not throw.

## What you should be able to do

| Level | After this file |
| --- | --- |
| Beginner | Compute gross, wash, and organic for one pair |
| Intermediate | See that a self-trade is added once and then skipped |
| Masterclass | Refuse to mix this with the window flag in the other wash lab |

---

## Beginner — one scene

```ts
organic([
  { seller: "alice", buyer: "bob", amount: 100 },
  { seller: "bob", buyer: "alice", amount: 40 },
]);
// { ok: true, gross: 140, wash: 80, organic: 60 }
```

Gross is the sum of amounts. When both directions of a pair are present, wash gains `2 * min(forward, back)`. Here that is `2 * 40`. Organic is `gross - wash`, so the unmatched 60 stays.

One direction only:

```ts
organic([{ seller: "alice", buyer: "bob", amount: 100 }]);
// { ok: true, gross: 100, wash: 0, organic: 100 }
```

A self-trade never enters the pair map:

```ts
organic([{ seller: "alice", buyer: "alice", amount: 10 }]);
// { ok: true, gross: 10, wash: 10, organic: 0 }
```

`Alice` (capital A) is refused: `"seller and buyer must be Antelope names"`. This function does not trim and does not lower-case. The other wash lab does.

There is no `at` field. A sale from last year counts the same as a sale from this block.

### Predict, then run

```bash
npm test
```

---

## Intermediate — the pair key is sorted names

| Attack | Naive code | This lab | Test |
| --- | --- | --- | --- |
| Subtract only the smaller leg | wash 40, organic 100 | both legs of the overlap leave: wash 80 | `both legs of the smaller way` |
| Double-count a self-trade inside the pair loop | wash 20 | `continue` after adding the amount once | `self-trade` |
| Accept `Alice` because chain names fold case | lower-case first | the regex is `[a-z1-5.]` and the test is case-sensitive | `Alice` refused |
| Invent a time window | drop the old leg | no clock in `wash.ts` | the 100/40 case has no `at` |
| Pass a WAX string amount | `"100.00000000"` | `Number.isInteger` fails that | not a separate test; the guard is in `organic` |

The page `Demo` calls the 100/40 case and prints the three numbers. It does not fetch accounts.

---

## Masterclass — not AtomicMarket, not backing

`wax-wash-trading-deduplicator` flags kinds on a clock and sums JavaScript `price` numbers. A return at 3600 seconds flags there. This file would still subtract it a year later, and would also subtract a pair that the flag lab leaves alone because the window closed.

`wax-nft-wash-trading-pattern-flag` is the third predicate (two trades, a window, no amounts). It was not re-opened in this pass.

AtomicMarket v2 listings are one asset. That does not change `organic`. Nothing here broadcasts `eosio.token::transfer` or reads a sale row.

AtomicAssets v2 rejects `backasset` and a non-empty `tokens_to_back`. Wash subtraction is not a cashback. Holder splits, if you need them, are `equalSplit` and `duePayout` elsewhere. An owner list is not this function.

### What this course will not teach

- A suspicious-pair score, a chart of "true liquidity", or a legal finding
- That `amount` came from a WAX transfer
- Native NFT backing
