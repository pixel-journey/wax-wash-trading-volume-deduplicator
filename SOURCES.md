# Sources

| Source | Use |
| --- | --- |
| [docs.wax.io](https://docs.wax.io/) | Marketplace context |
| [wash deduplicator](https://github.com/pixel-journey/wax-wash-trading-deduplicator) | Windowed kinds + JS price sum |
| [pattern flag](https://github.com/pixel-journey/wax-nft-wash-trading-pattern-flag) | Two-trade reverse only |

## Product facts locked by tests

- `organic([{alice	o bob:100},{bob	o alice:40}])` → gross **140**, wash **80**, organic **60**.
- One direction only → wash **0**.
- Self-trade amount enters wash once; skipped in pair loop.
- **No `at` field** — time is irrelevant here.
- Names: lowercase Antelope shape; `Alice` refused.
- Batch size 1..30; amount 1..…1e12 integer.
- **Not** a live chart of "true liquidity."
