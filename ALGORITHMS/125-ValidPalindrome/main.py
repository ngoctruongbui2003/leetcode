class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        if len(s) == 1:
            return True

        left = 0
        right = len(s) - 1

        while left < right:
            if not s[left].isalnum():
                left += 1
                continue
            if not s[right].isalnum():
                right -= 1
                continue

            if s[left].lower() != s[right].lower():
                return False

            left += 1
            right -= 1

        return True

    def isPalindrome2(self, s):
        n = "~`!@#$%^&*()_-+=[{]}\|;:'\",<.>/?"
        s = s.lower().replace(" ", "")
        for c in n:
            s = s.replace(c, "")
        return s == s[::-1]


if __name__ == "__main__":
    solution = Solution()
    s1 = "A man, a plan, a canal: Panama"
    print(solution.isPalindrome(s1))  # Output: True
    s2 = "race a car"
    print(solution.isPalindrome(s2))  # Output: False
    s3 = " "
    print(solution.isPalindrome(s3))  # Output: True
