/**
 * @param {number} x
 * @return {number}
 */
var reverse1 = function(x) {
    const INT_MAX = 2147483647;  // 2^31 - 1

    let isPositive = x >= 0 // let sign = Math.sign(x);
    let temp = Math.abs(x)
    let res = 0

    console.log(temp);
    

    while (temp > 0) {
        let digit = temp%10
        temp = Math.floor(temp/10)

        // Check for overflow before multiplying and adding
        if (res > Math.floor(INT_MAX / 10) || 
            (res === Math.floor(INT_MAX / 10) && digit > 7)) {
            return 0;
        }

        res = res*10 + digit
    }

    return isPositive ? res : -res
};

var reverse2 = function(x) {
    let stringNumber = x.toString()
    const isNegative = stringNumber.includes('-')

    if(isNegative){
        stringNumber = stringNumber.replace('-', '')
    }

    const reversedStringNumber = stringNumber.split('').reverse().join('')
    if(parseInt(reversedStringNumber) < Math.pow(2, 31)){

    if(isNegative){
        return parseInt(reversedStringNumber) * -1
    }else{
        return reversedStringNumber
    }
    }else{
        return 0
    }
    
};

const x1 = 123
console.log(reverse1(x1)); // 321

const x2 = -123
console.log(reverse1(x2)); // -321

const x3 = 120
console.log(reverse1(x3)); // 21
