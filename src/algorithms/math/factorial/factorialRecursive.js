/**
 * @param {number} number
 * @return {number}
 */
export default function factorialRecursive(number) {
  if(number > 1){
    return number * factorialRecursive(number - 1)
  } else return 1
}
