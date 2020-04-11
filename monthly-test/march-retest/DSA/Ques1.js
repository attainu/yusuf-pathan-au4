const finduglynumber = (n) => {
  let ugly = []

  ugly[0] = 1;

  let i2 = 0;
  let i3 = 0;
  let i5 = 0;

  let multipleof2 = 2;
  let multipleof3 = 3;
  let multipleof5 = 5;
  let nextuglyno = 1

  ugly[0] = 1

  for (let i = 1; i < n; i++) {
    nextuglyno = Math.min(multipleof2, multipleof3, multipleof5);

    ugly[i] = nextuglyno
    if (nextuglyno == multipleof2) {
      i2 += 1;
      multipleof2 = ugly[i2] * 2;
    }

    if (nextuglyno == multipleof3) {
      i3 += 1;
      multipleof3 = ugly[i3] * 3;
    }

    if (nextuglyno == multipleof5) {
      i5 += 1;
      multipleof5 = ugly[i5] * 5;
    }
  }

  return nextuglyno;
};

console.log(finduglynumber(10));
