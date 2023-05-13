/**
 * @see https://www.youtube.com/watch?v=GTJr8OvyEVQ
 * @param {string} word
 * @return {number[]}
 */
function buildPatternTable(word) {
  const patternTable = [0];
  let prefixIndex = 0;
  let suffixIndex = 1;

  while (suffixIndex < word.length) {
    if (word[prefixIndex] === word[suffixIndex]) {
      patternTable[suffixIndex] = prefixIndex + 1;
      suffixIndex += 1;
      prefixIndex += 1;
    } else if (prefixIndex === 0) {
      patternTable[suffixIndex] = 0;
      suffixIndex += 1;
    } else {
      prefixIndex = patternTable[prefixIndex - 1];
    }
  }

  return patternTable;
}

/**
 * @param {string} text
 * @param {string} word
 * @return {number}
 */
export default function knuthMorrisPratt(text, word) {
  if (word.length === 0) {
    return 0;
  }
  
  if (text === word){
    return 0;
  }
  
  let start = 0;
  let textSlice;
  while(start <= text.length - word.length){
    console.log('testing: ', word)
    console.log('start is: ', start)
    textSlice = text.slice(start);
    if(word.length > textSlice.length){
      return -1;
    }

    if(word === textSlice){
      return start;
    }

    for(let i = 0; i < word.length; i++){
      console.log('inside for loop')
      console.log('comparing ', word[i], ' to ', text[start + i])
      if(word[i] !== text[start + i]){
        if(i === 0){
          console.log('incrementing start')
          start++;
          continue;
        } else {
          start += i;
        console.log('start is now ', start)
        continue;
        }
      } else if(i === word.length - 1){
        return start;
      }

    }
    
  }

  return -1;
}

knuthMorrisPratt('', '')
knuthMorrisPratt('a', '')
knuthMorrisPratt('a', 'a')
knuthMorrisPratt('abcbcglx', 'abca')
knuthMorrisPratt('abcbcglx', 'bcgl')
knuthMorrisPratt('abcxabcdabxabcdabcdabcy', 'abcdabcy')
knuthMorrisPratt('abcxabcdabxabcdabcdabcy', 'abcdabca')
knuthMorrisPratt('abcxabcdabxaabcdabcabcdabcdabcy', 'abcdabca')
knuthMorrisPratt('abcxabcdabxaabaabaaaabcdabcdabcy', 'aabaabaaa')