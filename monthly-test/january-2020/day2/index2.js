class MaximumSubarray {
  constructor() {}
  //implement your code here
  maximumSubarray(array) {
    let n = array.length,
      totalsofar = array[0],
      totalnow = array[0];

    for (let i = 1; i < n; i++) {
      if (totalnow + array[i] < array[i]) {
        totalnow = array[i];
      } else {
        totalnow = totalnow + array[i];
      }

      if (totalnow > totalsofar) {
        totalsofar = totalnow;
      }
    }
    return totalsofar;
  }
}

let maximumsubarray = new MaximumSubarray();
let array = [];
let length = Number(prompt("Please enter length of array"));
for (let i = 1; i <= length; i++) {
  let input = Number(prompt("Please enter your number"));
  array.push(input);
}
console.log(array);
maximumsubarray.maximumSubarray(array);


// Time complexity O(n)
// Time complexity O(1) 