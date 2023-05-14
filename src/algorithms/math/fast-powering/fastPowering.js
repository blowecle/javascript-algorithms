/**
 * Fast Powering Algorithm.
 * Recursive implementation to compute power.
 *
 * Complexity: log(n)
 *
 * @param {number} base - Number that will be raised to the power.
 * @param {number} power - The power that number will be raised to.
 * @return {number}
 */
export default function fastPowering(base, power) {
  if(power === 0){
    return 1;
  }

  if(power === 1){
    return base;
  }

  let duplicate = Math.floor(power / 2) * 2
  let result;
  if(power % 2 === 0){
    result = base ** duplicate
  } else {
    result = (base ** duplicate) * base;
  }
  return result;
}
