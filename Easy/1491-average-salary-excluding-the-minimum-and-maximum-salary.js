// https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/description/

/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  salary.sort((a, b) => a - b);

  let sum = 0;
  for (let i = 1; i < salary.length - 1; i++) {
    sum = sum + salary[i] / 1000;
  }
  //   console.log(sum)
  return (sum / (salary.length - 2)) * 1000;
};

const salary = [4000, 3000, 1000, 2000];
console.log(average(salary));

/*
Example 1:
    Input: salary = [4000,3000,1000,2000]
    Output: 2500.00000
    Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
    Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

Example 2:
    Input: salary = [1000,2000,3000]
    Output: 2000.00000
    Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
    Average salary excluding minimum and maximum salary is (2000) / 1 = 2000
    */
