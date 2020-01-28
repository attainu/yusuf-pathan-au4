// Recursive approach and Top-down approach
class Factorial {
    constructor() {
    }
    factorial(number){
      if(number == 0) {
        return 1;
      }
      return number * this.factorial(number - 1);
    }
}

let factorial = new Factorial();
console.log(factorial.factorial(Number(prompt("Please enter your number"))));

//Time and Space complexity is O(n)






// Bottom-up approach
class Factorial {
    constructor() {
    }
    factorial(number){
      if(number == 0) {
          return 1;
      }

      let f = 1;
      for(let i = 1; i <= number; i++) {
        f = f * i;
      }
      return f;
    }
}

let factorial = new Factorial();
console.log(factorial.factorial(Number(prompt("Please enter your number"))));

// Time complexity is O(n)
// Space complexity is O(1)