class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        s = list(s)
        t = list(t)
        s.sort()
        t.sort()

        return "".join(s) == "".join(t)


if __name__ == '__main__':
    s = Solution()
    print(s.isAnagram("anagram", "nagaram"))
    print(s.isAnagram("rat", "car"))
    print(s.isAnagram("a", "ab"))
    print(s.isAnagram("ab", "a"))
    print(s.isAnagram("a", "a"))
    print(s.isAnagram("ab", "ba"))
    print(s.isAnagram("abc", "bac"))
    print(s.isAnagram("abc", "bca"))
    print(s.isAnagram("abc", "cab"))
    print(s.isAnagram("abc", "cba"))
    print(s.isAnagram("abc", "abc"))
