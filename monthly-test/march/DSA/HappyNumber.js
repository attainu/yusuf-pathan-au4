const checkHappy = n => {
  if (n === 1 || n === 7) {
    return true;
  }
  if (n < 10) {
    return false;
  }
  let arr = (n + '').split(''), sum = 0
  for (let i = 0;i < arr.length; i++) {
    sum = arr[i] * arr[i] + sum
  }
  return checkHappy(sum)
};
console.log(checkHappy(19));