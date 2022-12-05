// https://leetcode.com/problems/middle-of-the-linked-list/

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
var middleNode = function (head) {
  let pointerOne = head;
  let pointerTwo = head;

  while (pointerTwo !== null && pointerTwo.next != null) {
    pointerOne = pointerOne.next;
    if (pointerTwo.next !== null) pointerTwo = pointerTwo.next.next;
    else pointerTwo = null;
  }

  return pointerOne;
};

/*
Example 1:
    Input: head = [1,2,3,4,5]
    Output: [3,4,5]
    Explanation: The middle node of the list is node 3.

Example 2:
    Input: head = [1,2,3,4,5,6]
    Output: [4,5,6]
    Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
    */
