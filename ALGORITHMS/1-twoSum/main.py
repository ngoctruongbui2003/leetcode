class Solution(object):
    # One pass hash table
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        hash_map = {}
        for i in range(len(nums)):
            divide = target - nums[i]

            if divide in hash_map:
                return [hash_map[divide], i]
            hash_map[nums[i]] = i
        return None

    # Two pass hash table
    def twoSum2(self, nums, target):
        numMap = {}
        n = len(nums)

        # Build the hash table
        for i in range(n):
            numMap[nums[i]] = i

        # Find the complement
        for i in range(n):
            complement = target - nums[i]
            if complement in numMap and numMap[complement] != i:
                return [i, numMap[complement]]

        return []

    # Brute force
    def twoSum3(self, nums, target):
        n = len(nums)
        for i in range(n - 1):
            for j in range(i + 1, n):
                if nums[i] + nums[j] == target:
                    return [i, j]
        return []


if __name__ == "__main__":
    solution = Solution()

    nums1 = [2, 7, 11, 15]
    target1 = 9

    nums2 = [3, 2, 4]
    target2 = 6

    nums3 = [3, 3]
    target3 = 6

    print(solution.twoSum(nums1, target1))  # Output: [0, 1]
    print(solution.twoSum(nums2, target2))  # Output: [1, 2]
    print(solution.twoSum(nums3, target3))  # Output: [0, 1]
