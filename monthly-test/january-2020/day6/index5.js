function firstNonRepeatedCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    var c = string.charAt(i);
    if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
      return [c, i];
    }
  }
  return null;
}

console.log(firstNonRepeatedCharacter(`hackerank`));

//Time complexity is O(n)
//Space complexity is O(1)