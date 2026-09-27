// pick.js：取较小（基线：一律给零）
export function smallerOf(left, right) {
  return left <= right ? left : right;
}
