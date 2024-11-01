class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        productAllArray = 1
        isZero = False
        res = []

        for x in nums:
            if x != 0:
                productAllArray *= x
            else:
                if isZero:
                    return [0] * len(nums)
                else:
                    isZero = True

        for i in range(len(nums)):
            if nums[i] != 0 and isZero:
                res.append(0)
            elif nums[i] != 0:
                res.append(productAllArray // nums[i])
            elif nums[i] == 0 and isZero:
                res.append(productAllArray)
        return res


if __name__ == '__main__':
    s = Solution()
    print(s.productExceptSelf([1, 2, 3, 4]))  # [24, 12, 8, 6]
    print(s.productExceptSelf([-1, 1, 0, -3, 3]))  # [0, 0, 9, 0, 0]
