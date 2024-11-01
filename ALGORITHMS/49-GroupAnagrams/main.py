class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """

        def sorted_string(s):
            s = list(s)
            s.sort()
            return ''.join(s)

        res = []
        list_anagrams = []
        for x in strs:
            temp = x + ""
            temp = sorted_string(temp)
            if temp not in list_anagrams:
                list_anagrams.append(temp)
                res.append([x])
            else:
                res[list_anagrams.index(temp)].append(x)

        return res

    def groupAnagrams2(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        anagram_map = {}

        for word in strs:
            sorted_key = ''.join(sorted(word))
            if sorted_key in anagram_map:
                anagram_map[sorted_key].append(word)
            else:
                anagram_map[sorted_key] = [word]
        return list(anagram_map.values())


if __name__ == "__main__":
    solution = Solution()

    strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"]
    print(solution.groupAnagrams(strs1))
    # Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
    strs2 = [""]
    print(solution.groupAnagrams(strs2))  # Output: [[""]]
    strs3 = ["a"]
    print(solution.groupAnagrams(strs3))  # Output: [["a"]]
