/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

export default function hammingDistance(str1, str2) {
    if(str1.length !== str2.length){
        throw new Error("strings must be the same length")
    }

    let count = 0;
    
    for(let i=0; i < str1.length; i++){
        if(str1[i] !== str2[i]) count++
    }

    return count;
}