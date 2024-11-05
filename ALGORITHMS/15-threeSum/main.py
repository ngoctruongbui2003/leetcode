class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        nums.sort()
        res = []

        for i in range(len(nums)):
            if (i > 0 and nums[i] == nums[i - 1]):
                continue

            left = i + 1
            right = len(nums) - 1

            while left < right:
                sum = nums[i] + nums[left] + nums[right]
                if sum == 0:
                    res.append([nums[i], nums[left], nums[right]])
                    left += 1
                    right -= 1
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1
                    while left < right and nums[right] == nums[right + 1]:
                        right -= 1
                elif sum < 0:
                    left += 1
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1
                else:
                    right -= 1
                    while left < right and nums[right] == nums[right + 1]:
                        right -= 1
        return res


if __name__ == "__main__":
    solution = Solution()
    nums1 = [-1, 0, 1, 2, -1, -4]  # sorted: [-4, -1, -1, 0, 1, 2]
    print(solution.threeSum(nums1))  # Output: [[-1, -1, 2], [-1, 0, 1]]
    nums2 = [0, 1, 1]
    print(solution.threeSum(nums2))  # Output: []
    nums3 = [0, 0, 0]
    print(solution.threeSum(nums3))  # Output: [[0, 0, 0]]
