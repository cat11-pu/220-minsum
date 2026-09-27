import assert from "node:assert";
import { smallerOf } from "../pick.js";
import { totalSmaller } from "../total.js";
import { render } from "../app.js";

let failed = 0;
function check(name, fn) {
  try { fn(); console.log("ok " + name); } catch (e) { failed += 1; console.log("FAIL " + name + " :: " + e.message); }
}

check("smallerOf returns a number", () => {
  assert.strictEqual(typeof smallerOf(3, 5), "number");
});

check("totalSmaller returns mins", () => {
  assert.ok(Array.isArray(totalSmaller([1], [2]).mins));
});

check("totalSmaller returns a total", () => {
  assert.strictEqual(typeof totalSmaller([1], [2]).total, "number");
});

check("render counts mins", () => {
  assert.strictEqual(typeof render({ left: [1], right: [2] }).count, "number");
});

check("render exposes biggest position", () => {
  assert.strictEqual(typeof render({ left: [1], right: [2] }).biggest_at, "number");
});

console.log("5 cases, " + failed + " failed");
process.exit(failed === 0 ? 0 : 1);
