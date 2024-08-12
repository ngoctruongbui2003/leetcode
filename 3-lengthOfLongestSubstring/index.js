/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = (s) => {
    const len = s.length

    if (len <= 1) return len

    let l = 0
    let maxLen = 0
    let seen = new Map()

    for (let r=l; r < len; r++) {
        let curr = s[r]
        let prev = seen.get(curr)

        if (prev > l) {
            l = prev + 1
        }

        seen.set(curr, r)
        maxLen = Math.max(maxLen, r-l+1)

        console.log(`-----------${r}------------`);
        
        console.log(`curr::${curr}`);
        console.log(`l::${l}`);
        console.log(`maxLen::${maxLen}`);
        console.log(seen);
        
        
    }

    return maxLen
}

const s = "pwwkew"
console.log(lengthOfLongestSubstring(s)); // 3

// abcccda


// var lengthOfLongestSubstring = function(s) {
//     if (s.length === 0) return 0

//     const length = s.length
//     var obj = {}
//     var maxLength = 0
//     var currentLength = 0

//     for(var i=0; i < length; i++) {
//         const digit = s[i]

//         if (digit in obj) {
//             currentLength = Object.entries(obj).length
//             maxLength = maxLength > currentLength ? maxLength : currentLength
//             obj = Object.entries(obj).reduce((acc, [key, value]) => {
                
//                 if (value > obj[digit]) {
//                     acc[key] = value;
//                 }
//                 return acc;
//             }, {});
            
//         } else {
//             currentLength = Object.entries(obj).length
//         }

//         obj[digit] = i

//         console.log(`----------${i}-----------`);
        
//         console.log(`digit::${digit}`);
//         console.log(`currentLength::${currentLength}`);
//         console.log(`maxLength::${maxLength}`);
        
        
//         console.log(obj);
//     }

//     maxLength = maxLength > currentLength ? maxLength : currentLength

//     return maxLength
// };