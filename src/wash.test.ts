import { describe, expect, it } from "vitest";
import { organic } from "./wash";

describe("wash volume", () => {
  it("subtracts both legs of the smaller way", () => {
    expect(organic([
      { seller: "alice", buyer: "bob", amount: 100 },
      { seller: "bob", buyer: "alice", amount: 40 },
    ])).toEqual({ ok: true, gross: 140, wash: 80, organic: 60 });
  });

  it("keeps a one-way sale", () => {
    expect(organic([{ seller: "alice", buyer: "bob", amount: 100 }])).toEqual({ ok: true, gross: 100, wash: 0, organic: 100 });
  });

  it("counts a self-trade as wash and refuses a bad name", () => {
    expect(organic([{ seller: "alice", buyer: "alice", amount: 10 }])).toEqual({
      ok: true,
      gross: 10,
      wash: 10,
      organic: 0,
    });
    expect(organic([{ seller: "Alice", buyer: "bob", amount: 10 }])).toEqual({
      ok: false,
      reason: "seller and buyer must be Antelope names",
    });
  });
});
