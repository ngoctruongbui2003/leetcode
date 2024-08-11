/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function ArrayToListNode(list) {
    if (list.length === 0) return null; // Return null for an empty array

    // Create the head of the list
    const head = new ListNode(list[0]);
    let current = head;

    // Iterate through the rest of the array
    for (let i = 1; i < list.length; i++) {
        current.next = new ListNode(list[i]);
        current = current.next; // Move to the next node
    }

    return head; // Return the head of the linked list
}

var addTwoNumbers = function(l1, l2) {
    if (!l1 && !l2) throw new Error('not value')
    
    var headRes = new ListNode(0)
    var currentRes = headRes
    var balance = 0

    while (l1 || l2 || balance) {
        const value1 = l1 ? l1.val : 0
        const value2 = l2 ? l2.val : 0

        const sum = value1 + value2 + balance
        balance = Math.floor(sum / 10)
        currentRes.next = new ListNode(sum % 10)
        
        currentRes = currentRes.next
        l1 = l1 ? l1.next : l1
        l2 = l2 ? l2.next : l2
    }

    return headRes.next
};

const l1 = ArrayToListNode([2,4,3])
const l2 = ArrayToListNode([5,6,4])
console.log(addTwoNumbers(l1, l2));
