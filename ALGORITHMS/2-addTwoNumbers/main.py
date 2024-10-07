# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def array_to_listnode(arr):
    if not arr:
        return None

    head = ListNode(arr[0])
    current = head

    for value in arr[1:]:
        current.next = ListNode(value)
        current = current.next

    return head


def listnode_to_array(head):
    arr = []
    current = head

    while current:
        arr.append(current.val)
        current = current.next

    return arr


class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        balance = 0
        head = ListNode(0)
        currNode = head

        while (l1 or l2 or balance != 0):
            value1 = l1.val if l1 else 0
            value2 = l2.val if l2 else 0

            sum = value1 + value2 + balance
            balance = sum // 10
            tempNode = ListNode(sum % 10)

            currNode.next = tempNode

            currNode = currNode.next
            l1 = l1.next if l1 else 0
            l2 = l2.next if l2 else 0

        return head.next


if __name__ == "__main__":
    solution = Solution()

    l1 = [2, 4, 3]
    l2 = [5, 6, 4]
    print(listnode_to_array(
        solution.addTwoNumbers(array_to_listnode(l1), array_to_listnode(l2))
    ))
    # Output: [7,0,8]

    l1 = [0]
    l2 = [0]
    print(listnode_to_array(
        solution.addTwoNumbers(array_to_listnode(l1), array_to_listnode(l2))
    ))
    # Output: [0]

    l1 = [9, 9, 9, 9, 9, 9, 9]
    l2 = [9, 9, 9, 9]
    print(listnode_to_array(
        solution.addTwoNumbers(array_to_listnode(l1), array_to_listnode(l2))
    ))
    # Output: [8,9,9,9,0,0,0,1]
