/**
 * The overall run time complexity should be O(log (m+n)).
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = [...nums1, ...nums2].sort((a, b) => a - b)
    console.log(nums);

    let mid = Math.floor(nums.length / 2)

    return nums.length % 2 !== 0 ? nums[mid] : ((nums[mid-1] + nums[mid]) / 2)
};


// const nums1 = [1,3], nums2 = [2, 4]
// console.log(findMedianSortedArrays(nums1, nums2));

const nums1 = [3], nums2 = [-4,-1]
console.log(findMedianSortedArrays(nums1, nums2));

// var findMedianSortedArrays = function(nums1, nums2) => {
//     let p1 = 0;
//     let p2 = 0;
//     let median = 0;
//     const total_length = nums1.length + nums2.length;
//     const half = Math.floor(total_length / 2);
//     const isEven = total_length % 2 == 0;
//     let last = 0, secondToLast = 0;

//     for (let i=0; i<=half; i++) {
//         secondToLast = last;
//         // elements in nums1 are smaller
//         if (p1 < nums1.length && (p2 >= nums2.length || nums1[p1] < nums2[p2])) {
//             last = nums1[p1];
//             p1++;
//         } else {
//             last = nums2[p2];
//             p2++;
//         }
//     }

//     if (isEven) {
//         median = (secondToLast + last)/2;
//     } else {
//         median = last;
//     }

//     return median;
// }