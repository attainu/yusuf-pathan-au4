let isAnagram = function(s, t) {
  if (s.length != t.length) {
    return false;
  }
  let lettersInS = {};
  for (let character of s) {
    if (lettersInS[character]) {
      lettersInS[character]++;
    } else {
      lettersInS[character] = 1;
    }
  }
  for (let character of t) {
    if (!lettersInS[character]) {
      return false;
    } else {
      lettersInS[character]--;
      if (lettersInS[character] < 0) {
        return false;
      }
    }
  }
  return true;
};

let result = isAnagram(`anagram`, `nagaram`);
console.log(result);