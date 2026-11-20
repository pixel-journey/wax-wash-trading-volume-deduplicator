# Security — wash volume arithmetic

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Both directions present | wash = `2 * min(forward, back)` |
| Self-trade | counted once into wash; not in pair map |
| Bad name / amount | `{ ok: false }` (no throw) |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Time windows | **No clock** in this lab |
| Live liquidity charts | Arguments only |
| Legal finding | Soft arithmetic only |

## Attack angles

1. Calling organic volume "true liquidity" in marketing.  
2. Mixing this with the 3600s flag lab without new tests.  
3. Accepting case-folded names when this lab is case-sensitive.

## Honesty limits

No market scan. [docs.wax.io](https://docs.wax.io/) · [clock-based deduplicator](https://github.com/pixel-journey/wax-wash-trading-deduplicator).
