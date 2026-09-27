// total.js：合计（基线：一律给空表）
import { smallerOf } from "./pick.js";

export function totalSmaller(left, right) {
  if (left.length !== right.length) {
    const error = new Error("两列长度不一致");
    error.code = "E_BAD_COLUMN";
    throw error;
  }
  const count = left.length;
  const mins = new Array(count);
  let total = 0;
  let biggest = 0;
  let biggest_at = 0;
  for (let i = 0; i < count; i += 1) {
    const value = smallerOf(left[i], right[i]);
    mins[i] = value;
    total += value;
    if (biggest_at === 0 || value > biggest) {
      biggest = value;
      biggest_at = i + 1;
    }
  }
  return { mins: mins, total: total, biggest: biggest, biggest_at: biggest_at };
}
