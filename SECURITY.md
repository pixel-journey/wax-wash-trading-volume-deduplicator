# Security — wash volume arithmetic

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Both directions present | wash = `2 * min(forward, back)` |
| Self-trade | counted once into wash; not in pair map |
| Bad name / amount | `{ ok: false }` (no throw) |
| Case-sensitive names | `Alice` ≠ `alice` in this lab |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Time windows | **No clock** in this lab |
| Live liquidity charts | Arguments only |
| Legal finding | Soft arithmetic only |
| Organic remainder as "true depth" | Marketing claim forbidden without more evidence |

## Attack angles

1. Calling organic volume "true liquidity" in marketing.  
2. Mixing this with the **3600s** flag lab without new tests.  
3. Accepting case-folded names when this lab is case-sensitive.  
4. Treating wash volume as a ban score.  
5. Double-counting self-trades into the pair map.

## Honesty limits

No market scan. No timestamps.

| Sibling | Distinction |
| --- | --- |
| [clock-based deduplicator](https://github.com/pixel-journey/wax-wash-trading-deduplicator) | 3600s window |
| [pattern flag](https://github.com/pixel-journey/wax-nft-wash-trading-pattern-flag) | Two-trade reverse predicate |

[docs.wax.io](https://docs.wax.io/).
