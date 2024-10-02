/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const lenHeight = height.length
    let maxArea = 0
    let l = 0, r = lenHeight - 1
    
    while (l < r) {
        let valueLeft = height[l]
        let valueRight = height[r]
        let area = Math.min(valueLeft, valueRight) * (r-l)

        maxArea = area > maxArea ? area : maxArea
        
        if (valueLeft >= valueRight) {
            r--
        } else {
            l++
        }
    }

    return maxArea
};

const height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height));
