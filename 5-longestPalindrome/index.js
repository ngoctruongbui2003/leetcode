/**
 * @param {string} s
 * @return {string}
 */
// Expand Around Center
var longestPalindrome = function(s) {
    if (s.length <= 1) return s;

    let start = 0;
    let maxLength = 1;

    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // Calculate the length of the palindrome
        const length = right - left - 1;
        if (length > maxLength) {
            maxLength = length;
            start = left + 1;
        }
    };

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i);   // Odd length palindromes
        expandAroundCenter(i, i + 1); // Even length palindromes
    }

    return s.substring(start, start + maxLength);
};

const s = "cbacabd"
console.log(longestPalindrome(s)); // "bab"


// O(n^3)
// var isPalindromeString = (s) => {
//     return s.split("").reverse().join("") === s
// }

// var longestPalindrome = function(s) {
//     if (s.length <= 1) return s

//     let longestStr = ""

//     for(let i=0; i < s.length-1; i++) {
//         for(let j=i+1; j < s.length; j++) {
//             let sliceStr = s.slice(i, j+1)

//             if(isPalindromeString(sliceStr)) {
//                 longestStr = sliceStr.length > longestStr.length ? sliceStr : longestStr
//             }
//         }
//     }

//     if (longestStr === "") return s[0]

//     return longestStr
// };