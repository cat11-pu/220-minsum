// app.js：渲染结果
import { smallerOf } from "./pick.js";
import { totalSmaller } from "./total.js";

export function render(spec) {
  const left = spec.left || [];
  const right = spec.right || [];
  const view = totalSmaller(left, right);
  const mins = view.mins || [];
  return { mins: mins, total: view.total || 0, biggest: view.biggest || 0,
           biggest_at: view.biggest_at || 0, count: mins.length,
           left_count: left.length, right_count: right.length,
           tail: smallerOf(left[0], right[0]) };
}
