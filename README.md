# Round trips leave the organic side

**Trust label:** `educational-reference`  
**Catalog:** [wax-ecosystem-blueprint-catalog](https://github.com/pixel-journey/wax-ecosystem-blueprint-catalog)

alice to bob for 100 and bob to alice for 40. Wash is 80. Organic is 60. One direction is not wash. No market is scanned.

## What is actually in the repo

| Piece | Role |
| --- | --- |
| `src/wash.ts` | The pure rules |
| `src/wash.test.ts` | The claims in the verification log |
| `src/usecases.ts` | HTTP requests, built and not sent |
| `src/api.ts` | The same unsent WAX query builders as the other educational repos |
| `src/Demo.tsx` | Offline page |
| `docs/PRIOR-SCOPE.md` | The July README. It describes a product this tree does not ship |

`npm test` runs the rules. `npm run dev` opens the page.

## Where the neighboring idea lives

A time-window flag, without amounts, lives in `wax-nft-wash-trading-pattern-flag`. This repo does not decide that a pair is suspicious. It only subtracts. The July product description is in `docs/PRIOR-SCOPE.md` and is not what this tree does.

## Queries

`executed` is false. This repo did not call any host. No transaction is invented.
