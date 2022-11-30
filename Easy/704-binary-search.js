// https://leetcode.com/problems/binary-search/

var search = function(nums=[], target) { 
    
    // Corner cases
    if (nums.length == 0) {return -1;}
    if (target>nums[nums.length-1]) return -1;
    if (target<nums[0]) return -1;

    start_index = 0
    end_index = nums.length-1
    middle_index = 0
    
    
   while (start_index<=end_index) {
        middle_index = Math.floor((start_index + end_index)/2)

        if (nums[middle_index]==target) return middle_index
        
        if (target>nums[middle_index]) start_index = middle_index+1
        else end_index = middle_index-1
        
    }
    return -1
}

const nums = [-1,0,3,5,9,12], target = 9
console.log(search(nums,target))

/*
Example 1:
    Input: nums = [-1,0,3,5,9,12], target = 9
    Output: 4
    Explanation: 9 exists in nums and its index is 4

Example 2:
    Input: nums = [-1,0,3,5,9,12], target = 2
    Output: -1
    Explanation: 2 does not exist in nums so return -1
    */