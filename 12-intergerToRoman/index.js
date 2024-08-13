/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let arr = []
    let i = 0

    while(num > 0) {
        if(num >= values[i]) {
            arr.push(romans[i])
            num -= values[i]
        } else {
            i++
        }
        console.log(`num::${num}`);
        console.log(`values[i]::${values[i]}`);
        console.log(`arr::${arr}`);
        
    }

    return arr.join("")
};

var intToRoman = function(num) {
    let res = ''
    let list = [
        ['I',1], ['IV',4], ['V',5], ['IX', 9],['X',10],['XL',40],
        ['L',50], ['XC', 90],['C',100], ['CD',400],['D',500],['CM',900], ['M',1000]
    ];
    
    for(let i= list.length-1; i>=0; i--){
        let question = Math.floor(num/list[i][1]);

        // question is the count how many times the symbol should come

        res += Array(question).fill(list[i][0]).join('');
        

        num = Math.floor(num%list[i][1]);

        
        console.log(`question::${question}`);
        console.log(`res::${res}`);
        console.log(`num::${num}`);
    }
    return res;
};

const num = 3749
console.log(intToRoman(num)); // "MMM DCC XL IX"

// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000

// I II III IV V VI VII VIII IX X
// 3000 2000 1000 0
// 700 200 100 100
// 40 
// 9