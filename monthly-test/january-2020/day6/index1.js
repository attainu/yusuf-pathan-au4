let triplets = arr => {
  let len = arr.length;
  let res = [];
  let a = 0;
  let b = 0;
  arr.sort((a, b) => a - b);
  for (i = 0; i < len; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    a = i + 1;
    b = len - 1;
    while (a < b) {
      if (arr[i] + arr[a] + arr[b] < 0) {
        a++;
      } else if (arr[i] + arr[a] + arr[b] > 0) {
        b--;
      } else {
        res.push([arr[i], arr[a], arr[b]]);
        while (a < b && arr[a] === arr[a + 1]) a++;
        while (a < b && arr[b] === arr[b - 1]) b--;
        a++;
        b--;
      }
    }
  }
  return res;
};

console.log(triplets([-1, 0, 1, 2, -1, -4]));

//Time complexity is O(n^2)
//Space complexity is O(1)