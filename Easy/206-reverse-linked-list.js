// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let next = null;
  let current = head;
  let prev = null;

  while (current != null) {
    next = current.next; // next is Node2
    current.next = prev; // Node1 points to null
    prev = current; // Update previous node, becomes Node1
    current = next; // Pointer moved to Node2
  }

  head = prev;
  return head;
};

/*
Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []
*/