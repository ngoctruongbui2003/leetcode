class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        hash_map = {}
        max_length = 0
        start = 0

        for i in range(len(s)):
            prev = hash_map.get(s[i])

            if prev is not None and prev >= start:
                start = prev + 1

            max_length = max(max_length, i - start + 1)
            hash_map[s[i]] = i

        return max_length


if __name__ == "__main__":
    solution = Solution()

    s1 = "abba"
    s2 = "bbbbb"
    s3 = "pwwkew"

    print(solution.lengthOfLongestSubstring(s1))  # Output: 3
    print(solution.lengthOfLongestSubstring(s2))  # Output: 1
    print(solution.lengthOfLongestSubstring(s3))  # Output: 3
