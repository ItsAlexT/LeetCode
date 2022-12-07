// https://leetcode.com/problems/remove-nth-node-from-end-of-list/?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let headX = head;

  const removeElement = function (node, counter) {
    if (node.next == null) return counter;
    let max = removeElement(node.next, counter + 1);
    if (counter === max - n ) {
      if (node.next !== null) node.next = node.next.next;
      else node.next = null;
    }
    return max;
  };
  const maxNum = removeElement(head, 1);
  // if first node
  if (n === maxNum) headX = headX.next;

  return headX;
};

/*
Example 1:
    Input: head = [1,2,3,4,5], n = 2
    Output: [1,2,3,5]
Example 2:
    Input: head = [1], n = 1
    Output: []
    */
