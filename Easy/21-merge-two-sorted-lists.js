// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function (list1, list2) {
    let head = null;
    if (list1 === null && list2 === null) { return head }

    if (list1 === null) {
        return list2
    }
    else if (list2 === null) {
        return list1
    }
    else if (list1.val <= list2.val) {
        head = new ListNode(list1.val)
        list1 = list1.next
    }
    else {
        head = new ListNode(list2.val)
        list2 = list2.next
    }

    let front = head

    while (list1 !== null || list2 !== null) {
        if (list1 === null) {
            head.next = new ListNode(list2.val)
            head = head.next
            list2 = list2.next
            continue;
        }
        if (list2 === null) {
            head.next = new ListNode(list1.val)
            head = head.next
            list1 = list1.next
            continue;
        }

        if (list1.val <= list2.val) {
            head.next = new ListNode(list1.val)
            head = head.next
            list1 = list1.next
        }
        else {
            head.next = new ListNode(list2.val)
            head = head.next
            list2 = list2.next
        }
    }

    return front
};

/*
Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
*/