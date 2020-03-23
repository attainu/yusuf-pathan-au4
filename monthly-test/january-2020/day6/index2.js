let klarge = (arr, n) => {
    if(n < 1 || arr.length === 0) {
        return 0;
    }

    return getk(arr.length - n + 1, arr, 0, arr.length - 1);
}

let getk = (k, array, start, end) => {
    
    let pivot = array[end];

    let left = start;
    let right = end;

    while(true) {
        while (array[left] < pivot && left < right) {
			left++;
		}
 
		while (array[right] >= pivot && right > left) {
			right--;
		}
 
		if (left == right) {
			break;
		}
 
		swap(array, left, right);
    }

    swap(array, left, end);

    if(k === left + 1) {
        return pivot;
    } else if(k < left + 1) {
        return getk(k, array, start, left - 1);
    } else {
        return getk(k, array, left + 1, end);
    }



}

let swap = (arr, a, b) => {
    let c = arr[a];
    arr[a] = arr[b];
    arr[b] = c;
}

console.log(klarge([3,2,3,1,2,4,5,5,6], 4));

//Time complexity is O(n^2)
//Space complexity is O(n)