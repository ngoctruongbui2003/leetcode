class Solution(object):
    def twoSum(self, numbers, target):  # Use list slicing
        """
        :type numbers: List[int]
        :type target: int
        :rtype: List[int]
        """
        for i in range(len(numbers)):
            if numbers[i] == numbers[i - 1]:
                continue

            subtract = target - numbers[i]
            if subtract < numbers[i]:
                break

            remaining = numbers[i + 1:]
            if subtract in remaining:
                return [i + 1, remaining.index(subtract) + i + 2]

    def twoSum2(self, num, t):  # Use two pointers
        list = []
        left = 0
        right = len(num) - 1
        while (left <= right):
            if (num[left] + num[right] == t):
                list.append(left+1)
                list.append(right+1)
                break
            elif ((num[left] + num[right]) < t):
                left += 1
            else:
                right -= 1
        return list


if __name__ == "__main__":
    solution = Solution()

    numbers1, target1 = [2, 7, 11, 15], 9
    print(solution.twoSum(numbers1, target1))  # Output: [1, 2]
    numbers2, target2 = [2, 3, 4], 6
    print(solution.twoSum(numbers2, target2))  # Output: [1, 3]
    numbers3, target3 = [-1, 0], -1
    print(solution.twoSum(numbers3, target3))  # Output: [1, 2]
