/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // check for length
  if (s.length !== t.length) {
    return false;
  }

  // check for characters
  const characterCount = {};

  for (let char of s) {
    characterCount[char] = (characterCount[char] || 0) + 1;
  }

  for (let char of t) {
    if (!characterCount[char]) {
      return false;
    }
    characterCount[char]--;
  }

  for (let char in characterCount) {
    if (characterCount[char] !== 0) {
      return false;
    }
  }

  return true;
};
