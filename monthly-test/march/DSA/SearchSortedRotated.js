const RotatedSearch = (arr, target) => {
    
    let startIndex = 0;
    let endIndex = arr.length - 1 

    while( startIndex < endIndex - 1) {

        let midIndex = startIndex + Math.floor (( endIndex - startIndex ) / 2);
        
        if(arr[startIndex] < arr[midIndex]) {
            if(target >= arr[startIndex] && target <= arr[midIndex]) {
                endIndex = midIndex;
            }
            else {
                startIndex = midIndex;
            }   
        }
        else {
            if(target >= arr[midIndex] && target <= arr[endIndex]) {
                startIndex = midIndex;
            }
            else {
                endIndex = midIndex;
            }
        }
    }
    if(arr[startIndex] === target) {
        return startIndex;
    }
    if(arr[endIndex] === target) {
        return endIndex;
    }
    return -1;
}

console.log(RotatedSearch([4,5,6,7,0,1,2],1));