/**
 * @param {string} string
 * @return {boolean}
 */

export default function isPalindrome(string) {
  let leftPointer = 0;
  let rightPointer = string.length - 1;

  while(leftPointer < string.length / 2){
    if(string[leftPointer] !== string[rightPointer]){
      return false;
    }
    leftPointer++;
    rightPointer--;
  }
  return true;
}
