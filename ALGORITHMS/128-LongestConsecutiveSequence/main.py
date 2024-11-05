class Solution(object):
    def longestConsecutive(self, nums):  # Use sorted
        """
        :type nums: List[int]
        :rtype: int
        """
        sorted_unique_nums = sorted(list(set(nums)))
        max_length = 0

        for i in range(len(sorted_unique_nums)):
            if i == 0:
                current_length = 1
            elif sorted_unique_nums[i] == sorted_unique_nums[i - 1] + 1:
                current_length += 1
            else:
                current_length = 1
            max_length = max(max_length, current_length)

        return max_length

    def longestConsecutive2(self, nums):  # Use two pointers
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums) <= 1:
            return len(nums)

        numSet = set(nums)
        max_length = 0

        for i in range(len(numSet)):
            cur_length = 1
            left, right = nums[i] - 1, nums[i] + 1
            while left in numSet:
                numSet.remove(left)
                cur_length += 1
                left -= 1
            while right in numSet:
                numSet.remove(right)
                cur_length += 1
                right += 1

            max_length = max(cur_length, max_length)
        return max_length


if __name__ == "__main__":
    solution = Solution()

    nums1 = [100, 4, 200, 1, 3, 2]
    print(solution.longestConsecutive(nums1))  # Output: 4
    nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
    print(solution.longestConsecutive(nums2))  # Output: 9
    nums3 = [1, 2, 0, 1]
    print(solution.longestConsecutive(nums3))  # Output: 3
