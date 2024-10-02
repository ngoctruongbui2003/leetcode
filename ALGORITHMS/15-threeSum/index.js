/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a-b)
    let res = []
    let lengthNums = nums.length
    
    for(let i = 0; i < lengthNums - 2; i++) {
        if (nums[i] !== nums[i-1]) {
            let l = i + 1
            let r = lengthNums - 1
            
            while (l < r) {
                let sum = nums[i] + nums[l] + nums[r]
                if (sum === 0) {
                    res.push([nums[i], nums[l], nums[r]])
                    r--
                    l++
                    while (l < r && nums[r] === nums[r+1] && nums[l] === nums[l-1]) {
                        if(nums[r] === nums[r+1]) r--
                        if (nums[l] === nums[l-1]) l++
                    }
                } else if (sum > 0) {
                    r--
                } else {
                    l++
                }
            }
        }
    }

    return res
};

const nums1 = [-2,0,0,2,2]
console.log(threeSum(nums1)); // [[-1,-1,2],[-1,0,1]]
// -4 -1 -1 0 1 2

const nums2 = [0,1,1]
console.log(threeSum(nums2)); // []

const nums3 = [0,0,0,0]
console.log(threeSum(nums3)); // [[0,0,0]]
