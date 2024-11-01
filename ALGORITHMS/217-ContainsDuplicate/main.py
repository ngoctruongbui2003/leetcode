class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """

        nums.sort()
        for i in range(0, len(nums) - 1):
            if nums[i + 1] == nums[i]:
                return True
        return False

    def containsDuplicate2(self, nums):
        if len(set(nums)) != len(nums):
            return True
        else:
            return False

    def containsDuplicate3(self, nums):
        value_set = set()
        for num in nums:
            if num not in value_set:
                value_set.add(num)
            else:
                return True

        return False


if __name__ == '__main__':
    s = Solution()
    print(s.containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
    print(s.containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]))
