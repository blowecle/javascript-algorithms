/**
 * Calculate fibonacci number at specific position using Dynamic Programming approach.
 *
 * @param n
 * @return {number}
 */
export default function fibonacciNth(n) {
  let current = 1;
  let next = 1;
  let temp;

  for(let i = 1; i < n; i++){
    temp = next;
    next += current;
    current = temp;
  }

  return current;
}
