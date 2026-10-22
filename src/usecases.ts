import { ATOMIC_ORIGIN, HISTORY_ORIGIN, historyActions } from "./api";
import { organic } from "./wash";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const row = organic([
  { seller: "alice", buyer: "bob", amount: 100 },
  { seller: "bob", buyer: "alice", amount: 40 },
]);
if (!row.ok) throw new Error(row.reason);
const kept = row.organic;

export const USE_CASES: UseCase[] = [
  {
    title: "A sales query is not this subtraction",
    detail: `Organic is ${kept}. The sales request is not sent.`,
    request: { method: "GET", url: `${ATOMIC_ORIGIN}/atomicmarket/v1/sales?state=1&symbol=WAX&page=1&limit=20`, executed: false },
    transaction: null,
  },
  {
    title: "Transfer history is not a round trip",
    detail: "No sale action is built.",
    request: historyActions(HISTORY_ORIGIN, "alice", "eosio.token:transfer", 20),
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (kept !== 60) throw new Error("wash");
}
