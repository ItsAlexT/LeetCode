// https://leetcode.com/problems/unique-email-addresses/

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const setEmails = new Set();

  for (const email of emails) {
    let split = email.split("@");
    const domain = split[1];
    const address = split[0].split("+")[0].replaceAll(".", "");
    setEmails.add(address + "@" + domain);
  }

  return setEmails.size;
};


const emails = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com",
];
console.log(numUniqueEmails(emails));

// Example 1:
//     Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
//     Output: 2
//     Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.

// Example 2:
//     Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
//     Output: 3
