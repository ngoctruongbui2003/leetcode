/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return []

    const number = ['2', '3', '4', '5', '6', '7', '8', '9']
    const valuePhone = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    
    let res = valuePhone[number.indexOf(digits[0])].split("") // d,e,f

    for(let i=1; i < digits.length; i++) {
        let foundIndex = number.indexOf(digits[i])
        let foundValue = valuePhone[foundIndex] // abc

        let arr = []
        for(let j=0; j < res.length; j++) {
            for(let z=0; z < foundValue.length; z++) {
                arr.push(res[j] + foundValue[z])
            }
        }
        res = arr
    }

    return res
};

var letterCombinations = function(digits) {
    const n = digits.length;
    const ans = [];
    if(n == 0) return ans;

    const graph = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }

    const dfs = function(currIndex, str) {
        if(currIndex >= n) {
            ans.push(str);
            return;
        }

        for(let c of graph[digits[currIndex]]) {
            dfs(currIndex + 1, str + c);
        }
    }

    dfs(0, '');

    return ans;
};

const digits1 = "23"
console.log(letterCombinations(digits1)) // ["ad","ae","af","bd","be","bf","cd","ce","cf"]

const digits2 = ""
console.log(letterCombinations(digits2)) // []

const digits3 = "2"
console.log(letterCombinations(digits3)) // ["a","b","c"]
