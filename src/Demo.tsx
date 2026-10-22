"use client";

import { organic } from "./wash";

export function Demo() {
  const row = organic([
    { seller: "alice", buyer: "bob", amount: 100 },
    { seller: "bob", buyer: "alice", amount: 40 },
  ]);
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>Round trips leave the organic side</h1>
      <p className="lede">100 one way and 40 back. Wash is 80. Organic is 60. No market is scanned.</p>
      {row.ok ? <p>gross {row.gross}, wash {row.wash}, organic {row.organic}.</p> : <p>{row.reason}</p>}
    </main>
  );
}
