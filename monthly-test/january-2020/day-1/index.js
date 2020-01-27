class MoveZeros {
 
    constructor() {
    }
  
    moveZeros(array){
        for(let i = 0; i < array.length; i++) {
            if(array[i] === 0){
                array.splice(i, 1);
                array.push(0);
            }
        }
        console.log(array);
    }
  
}
  
let movezeros = new MoveZeros();
let array = [];
let length = Number(prompt("Please enter the length of array"));
for(let i = 1; i <= length; i++) {
   let input =  Number(prompt("Please enter your number"));
   array.push(input);
}
console.log(array);
movezeros.moveZeros(array);

// Time and Space complexity
// Time complexity = O(n);
// Space complexity = O(1)