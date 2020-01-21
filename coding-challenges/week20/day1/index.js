const Palindrome = n => {
    if (n < 0) { 
        return false; 
    }
    let num = Math.abs(n);
    const arr = [];
    let i = 1;
    while (num > 0) {
      const min = num % (10 ** i);
      num = num - min;
      i++;
      arr.push(min);
    }
    i = i - 2;
    let j = 0;
    return n === arr.reduce((res, x) => {
      const add = (x/ (10 ** j)) * (10 ** i);
      res += add;
      i--;
      j++;
      return res;
    }, 0);
  };
  
  console.log(Palindrome(1331));