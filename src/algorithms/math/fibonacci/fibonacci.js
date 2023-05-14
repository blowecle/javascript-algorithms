/**
 * Return a fibonacci sequence as an array.
 *
 * @param n
 * @return {number[]}
 */
export default function fibonacci(n) {
let fib = [1]

let next = 1;
for(let i = 1; i < n; i++){
  fib.push(next);
  next = fib[fib.length - 2] + fib[fib.length - 1];
}

return fib;
}
