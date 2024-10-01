/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    function dp(i, j) {
        if (j === p.length) return i === s.length;

        const match = i < s.length && (s[i] === p[j] || p[j] === '.');
        
        if (j + 1 < p.length && p[j + 1] === '*') {
            return dp(i, j + 2) || (match && dp(i + 1, j));
        } else {
            return match && dp(i + 1, j + 1);
        }
    }

    return dp(0, 0);
};

const s1 = "aa", p1 = "a"
console.log(isMatch(s1, p1)); // false

const s2 = "aa", p2 = "a*"
console.log(isMatch(s2, p2)); // true

const s3 = "ab", p3 = ".*"
console.log(isMatch(s3, p3)); // true

const s4 = "aab", p4 = ".a*b"
console.log(isMatch(s4, p4)); // true
