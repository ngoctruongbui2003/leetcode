/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false

    if (x > Math.pow(2, 31)) return false

    let str = x + ""
    str = str.split("").reverse().join("")

    return str == x
};

const x1 = 10
console.log(isPalindrome(x1))

// const x2 = -121
// console.log(isPalindrome(x2))

// const x3 = 10
// console.log(isPalindrome(x3))


// var isPalindrome = function(x) {
//     if(x<0) return false
//     let num=x;
//     let reverse=0; // reverse*10 + r

//     while(num!=0){
//         const reminder= num % 10;
//         reverse= reverse*10 + reminder;

//         num= parseInt(num/ 10);
//     }

//     return x==reverse;
// };