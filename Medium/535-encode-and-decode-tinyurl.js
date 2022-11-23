// https://leetcode.com/problems/encode-and-decode-tinyurl/

var encodeMap = new Map();
var decodeMap = new Map();

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  if (encodeMap.has(longUrl)) return encodeMap.get(longUrl);
  const base = "http://tinyurl.com/";
  const encoded = base + encodeMap.size;
  encodeMap.set(longUrl, encoded);
  decodeMap.set(encoded, longUrl);

  return encoded;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  if (decodeMap.has(shortUrl)) return decodeMap.get(shortUrl);
  return;
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

const url = "https://leetcode.com/problems/design-tinyurl";
const encoded = encode(url);
console.log("Encoded: ", encoded);
const decoded = decode(encoded);
console.log("Decoded: ", decoded);
//  Example 1:

//  Input: url = "https://leetcode.com/problems/design-tinyurl"
//  Output: "https://leetcode.com/problems/design-tinyurl"

//  Explanation:
//  Solution obj = new Solution();
//  string tiny = obj.encode(url); // returns the encoded tiny url.
//  string ans = obj.decode(tiny); // returns the original url after deconding it.
