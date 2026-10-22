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
});
