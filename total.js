// total.js：合计（基线：一律给空表）
import { smallerOf } from "./pick.js";

export function totalSmaller(left, right) {
  return { mins: [], total: 0, biggest: 0, biggest_at: 0 };
}
