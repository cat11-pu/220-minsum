// total.js：合计（逐项取较小值并相加，单次扫描）
import { smallerOf } from "./pick.js";

export function totalSmaller(left, right) {
  if (left.length !== right.length) {
    const error = new Error("column length mismatch: " + left.length + " vs " + right.length);
    error.code = "E_BAD_COLUMN";
    throw error;
  }
  const mins = new Array(left.length);
  let total = 0;
  let biggest = 0;
  let biggest_at = 0;
  for (let index = 0; index < left.length; index += 1) {
    const min = smallerOf(left[index], right[index]);
    mins[index] = min;
    total += min;
    if (index === 0 || min > biggest) {
      biggest = min;
      biggest_at = index + 1;
    }
  }
  return { mins: mins, total: total, biggest: biggest, biggest_at: biggest_at };
}
