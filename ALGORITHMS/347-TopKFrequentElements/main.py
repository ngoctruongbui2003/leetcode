class Solution(object):
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        freq_map = {}

        for x in nums:
            if x in freq_map:
                freq_map[x] += 1
            else:
                freq_map[x] = 1

        freq_sort = sorted(freq_map.items(), key=lambda x: x[1], reverse=True)

        return [x[0] for x in freq_sort[:k]]


if __name__ == "__main__":
    solution = Solution()

    nums1 = [1, 1, 1, 2, 2, 3]
    k1 = 2
    print(solution.topKFrequent(nums1, k1))  # Output: [1, 2]
    nums2 = [1]
    k2 = 1
    print(solution.topKFrequent(nums2, k2))  # Output: [1]
