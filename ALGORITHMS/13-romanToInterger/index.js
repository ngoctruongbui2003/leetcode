/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let res = 0

    for(let i=0; i<s.length; i++) {
        if (s[i] === 'M') res += 1000
        else if (s[i] === 'D') res += 500
        else if (s[i] === 'C' && s[i+1] === 'M') {res += 900; i++}
        else if (s[i] === 'C' && s[i+1] === 'D') {res += 400; i++}
        else if (s[i] === 'C') res += 100
        else if (s[i] === 'L') res += 50
        else if (s[i] === 'X' && s[i+1] === 'C') {res += 90; i++}
        else if (s[i] === 'X' && s[i+1] === 'L') {res += 40; i++}
        else if (s[i] === 'X') res += 10
        else if (s[i] === 'V') res += 5
        else if (s[i] === 'I' && s[i+1] === 'V') {res += 4; i++}
        else if (s[i] === 'I' && s[i+1] === 'X') {res += 9; i++}
        else if (s[i] === 'I') res += 1

    }

    return res
};

const romanToInt2 = function(inputString) {
    const SymbolsMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    const inputArray = inputString.split('')
    let sum = 0

    let index = 0
    while (index < inputArray.length) {
        const currentChar = inputArray[index]
        const nextChar = inputArray[index+1]
        if(SymbolsMap[nextChar] > SymbolsMap[currentChar]) {
            sum = sum + (SymbolsMap[nextChar] - SymbolsMap[currentChar])
            index += 1
        } else {
            sum += SymbolsMap[currentChar]
        }
        index += 1
    }

    return sum

};

const s1 = "DCXXI"
console.log(romanToInt(s1)); // 621

const s2 = "LVIII"
console.log(romanToInt(s2));

const s3 = "MCMXCIV"
console.log(romanToInt(s3));

