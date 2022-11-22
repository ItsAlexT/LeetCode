// https://leetcode.com/problems/maximum-number-of-balloons/

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const mapBalloon = new Map();
  mapBalloon.set("a", 1);
  mapBalloon.set("b", 1);
  mapBalloon.set("l", 2);
  mapBalloon.set("o", 2);
  mapBalloon.set("n", 1);

  const mapText = new Map();

  for (const char of text) {
    if (mapText.has(char)) mapText.set(char, mapText.get(char) + 1);
    else mapText.set(char, 1);
  }
  let min = Number.MAX_SAFE_INTEGER;
  for (const key of mapBalloon.keys()) {
    if (mapText.has(key)) {
      if (mapText.get(key) >= mapBalloon.get(key)) {
        let val = Math.floor(mapText.get(key) / mapBalloon.get(key));
        min = Math.min(min, val);
      } else return 0;
    } else return 0;
  }

  return min;
};

const text = "loonbalxballpoon";
console.log(maxNumberOfBalloons(text));

// Input: text = "nlaebolko"
// Output: 1

// Input: text = "loonbalxballpoon"
// Output: 2

// Input: text = "leetcode"
// Output: 0
