/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) return strs[0]

    let valueFirst = strs[0]
    strs = strs.slice(1, strs.length)
    let longestString = ""

    for(let i=0; i < valueFirst.length; i++) {
        let isMatch = true
        for (let str of strs) {
            if (str[i] !== valueFirst[i]) {
                isMatch = false
                break
            }
        }

        if (isMatch) {
            longestString += valueFirst[i]
        } else {
            break
        }

    }

    return longestString
};

var longestCommonPrefix = function(strs) {
    let pref = strs[0];
    let prefLen = pref.length;

    for (let i = 1; i < strs.length; i++) {
        let s = strs[i];
        while (pref !== s.substring(0, prefLen)) {
            prefLen--;
            if (prefLen === 0) {
                return "";
            }
            pref = pref.substring(0, prefLen);
        }
    }

    return pref;    
};

const strs1 = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs1)); // "fl"

// const strs2 = ["dog","racecar","car"]
// console.log(longestCommonPrefix(strs2)); // ""
