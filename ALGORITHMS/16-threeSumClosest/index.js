/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    const numsLength = nums.length
    let res = 1000000
    nums.sort((a, b) => a-b)
    
    for(let i=0; i < numsLength-2; i++) {
        let l = i+1
        let r = numsLength-1

        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r]

            if (sum === target) {
                return target
            } else if (sum < target) {
                l++
                while (nums[l] === nums[l-1]) l++
            } else {
                r--
                while (nums[r] === nums[r+1]) r--
            }

            res = Math.abs(sum - target) < Math.abs(res - target) ? sum : res
        }
    }

    return res
};

const nums1 = [-1,2,1,-4], target1 = 1
console.log(threeSumClosest(nums1, target1)); // 2
// sort
// -60 -4 -3 -2 0 1 1 3 6 7, target = 3
// two pointer
// -6:
// -6 -4 7 = -3 < 3 prev = underfide
// -6 -3 7 = -2 < 3 prev = -3
// -6 -2 7 = -1 < 3 prev = -1
// ...
// -6 1 7 = 2 < 3 prev=2 ~1
// -6 3 7 = 4 > 3 prev=3 ~1

const nums2 = [0,0,0], target2 = 1
console.log(threeSumClosest(nums2, target2)); // 0
