/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hashMapNum = {}
    for(var i=0; i < nums.length; i++) {
        const num = nums[i]
        const subtract = target - num

        if (subtract in hashMapNum) return [hashMapNum[subtract], i]

        hashMapNum[num] = i
        console.log(hashMapNum);
        
    }
};

console.log(twoSum([2,7,11,15], 9));
