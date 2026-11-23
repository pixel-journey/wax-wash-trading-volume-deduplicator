# AI handoff — wash trading volume deduplicator

## Non-negotiables

1. `organic([{alice→bob:100},{bob→alice:40}])` → gross **140**, wash **80**, organic **60**.
2. One direction only → wash **0**.
3. Self-trade amount enters wash once; skipped in pair loop.
4. **No `at` field** — time is irrelevant here.
5. Names: lowercase Antelope shape; `Alice` refused.
6. Batch size 1..30; amount 1..1e12 integer.
7. **Not** a live chart of "true liquidity."

## Prompt seeds

- "alice→bob 100, bob→alice 40 — organic volume?"
- "One-direction only — wash amount?"
- "Refuse mixed-case account names."
- "Contrast with windowed wash deduplicator (has clock)."

## Do not

- Require timestamps in this product.
- Claim true liquidity was measured on chain.
- Ban accounts from organic volume alone.
