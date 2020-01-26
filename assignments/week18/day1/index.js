function selectionSort(arr) {
    
    let min;
    let n = arr.length;
    
    for(let i = 0; i < n-1 ; i++) {
    
    min = i ;
    
    for(let j = i+1; j < n ; j++ ) {
    if(arr[ j ] < arr[ min ]) { 
        min = j ;
    }
    }
    
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
    }
    return arr;
    }
    console.log( selectionSort([2,0,2,1,1,0]) );