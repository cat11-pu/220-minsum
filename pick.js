// pick.js：取较小（两数里较小的那个，相等取该值）
export function smallerOf(left, right) {
  return left <= right ? left : right;
}
