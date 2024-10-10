class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if x < 0 or (x % 10 == 0 and x != 0):
            return False

        reversed_number = 0
        temp_number = x

        while temp_number > 0:
            reversed_number = reversed_number * 10 + temp_number % 10
            temp_number = temp_number // 10

        return x == reversed_number


# class Solution(object):
#     def isPalindrome(self, x):
#         """
#         :type x: int
#         :rtype: bool
#         """
#         i=str(x)
#         return i==i[::-1]

if __name__ == "__main__":
    solution = Solution()

    x1 = 121
    x2 = -121
    x3 = 10

    print(solution.isPalindrome(x1))  # Output: True
    print(solution.isPalindrome(x2))  # Output: False
    print(solution.isPalindrome(x3))  # Output: False
