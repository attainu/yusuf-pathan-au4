// let remdup = (arr, n) => {
//     if(n == 0 || n == 1) {
//         return n;
//     }
//     let temp = n;

//     let j = 0; 

//     for(let i = 0; i < n - 1; i++) {
//         if(arr[i] != arr[i + 1]) {
//             temp[j++] = arr[i];
//         }

//         temp[j++] = arr[n -1];

//         for(let i = 0; i < j; i++) {
//             arr[i] = temp[i];
//             return j;
//         }
//     }
// }

// let arr = [1,2,2,3,4,5,6,6,7]; 
// let result = remdup(arr, arr.length);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

let removeDuplicates = (arr, n) => { 
    if (n == 0 || n == 1) 
        return n; 
   
    let j = 0; 
  
    for (let i = 0; i < n-1; i++) 
        if (arr[i] != arr[i+1]) 
            arr[j++] = arr[i]; 
  
    arr[j++] = arr[n-1]; 
  
    return j; 
}

let arr = [1,2,2,3,4,5,6,6,7];
let n = arr.length;

n = removeDuplicates(arr, n);

for(let i = 0; i < n; i++) {
    console.log(arr[i]);
}