/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const INT_MIN = -2147483648
    const INT_MAX = 2147483647
    const isDigit = (char) => /^\d$/.test(char);
    const isSign = (char) => /^[+-]$/.test(char);
    let res = 0

    s = s.trim()
    let len = s.length
    let sign = s[0] === '-' ? -1 : 1
    let i = isSign(s[0]) ? 1 : 0

    console.log(s);
    

    while(i < len) {
        let digit = s[i]

        if (!isDigit(digit)) return res * sign

        res = res*10 + digit*1
        i++

        if (res >= INT_MAX && sign === 1 ) return INT_MAX
        else if (res >= Math.abs(INT_MIN) && sign === -1 ) return INT_MIN

        console.log(`digit::${digit}`);
        console.log(`res::${res}`);
        
    }

    return res * sign
};

const s = "-91283472332"
console.log(myAtoi(s))


function myAtoi(s) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);
    
    let i = 0;
    let sign = 1;
    let result = 0;

    // Remove leading whitespace
    while (s[i] === ' ') {
        i++;
    }

    // Handle sign
    if (s[i] === '-' || s[i] === '+') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // Read digits
    while (i < s.length) {
        const digit = s.charCodeAt(i) - '0'.charCodeAt(0);
        
        if (digit < 0 || digit > 9) {
            break;
        }
        
        // Check for overflow
        if (result > Math.floor(INT_MAX / 10) || 
            (result === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }
        
        result = result * 10 + digit;
        i++;
    }

    return sign * result;
}


let myAtoi = function(s) {
    let index = 0;
    let sign = 1;
    let result = 0;
    let n = s.length;
    
    // 1. Discard all leading whitespaces
    while (index < n && s[index] === ' ') {
        index++;
    }
    
    // 2. Check if the next character is a '-' or '+'
    if (index < n && (s[index] === '-' || s[index] === '+')) {
        sign = (s[index] === '-') ? -1 : 1;
        index++;
    }
    
    // 3. Convert the subsequent digits into an integer
    while (index < n && s[index] >= '0' && s[index] <= '9') {
        let digit = s[index] - '0';
        
        // 4. Check for overflow and clamp the result if needed
        if (result > Math.floor((2**31 - 1) / 10) || 
            (result === Math.floor((2**31 - 1) / 10) && digit > 7)) {
            return sign === 1 ? 2**31 - 1 : -(2**31);
        }
        
        result = result * 10 + digit;
        index++;
    }
    
    // 5. Return the result with the appropriate sign
    return result * sign;
};
var myAtoi = function (s) {
    let res = ""
    for (let i = 0; i < s.length; i++) {
        if (res === "" && s[i] === " ") continue
        if (res === "" && s[i] === "-" || (res === "" && s[i] === "+")) {
            res += s[i]
            continue
        }

        if (parseInt(s[i]) % 2 !== 0 && parseInt(s[i]) % 2 !== 1) {
            break
        }
        res += s[i]
    }
    if (Math.abs(parseInt(res) % 2) !== 0 && Math.abs(parseInt(res) % 2) !== 1) return 0
    return Math.abs(parseInt(res)) >= 2147483648 ? parseInt(res) < 2147483648 ? -2147483648 : 2147483647 : res
};