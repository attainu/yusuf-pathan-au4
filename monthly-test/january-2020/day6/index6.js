var longestCommonPrefix = function(strs) {
    let longestPrefix = '';
    if (strs.length > 0) {
      longestPrefix = strs[0];
      for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < longestPrefix.length; j++) {
          if (strs[i][j] != longestPrefix[j]) {
            longestPrefix = longestPrefix.slice(0, j);
            break;
          }
        }
      }
    }
    return longestPrefix;
};

console.log(longestCommonPrefix(["dog","racecar","car"]));

//Time complexity is O(n^2)
//Space complexity is O(1)