const quickSort = (arr, left, right) => {
    let pivot;
    let partIndex;
    if(left < right) {
        pivot = right;
        partIndex = partition(arr, pivot, left, right);

        quickSort(arr, left, partIndex - 1);
        quickSort(arr, partIndex + 1, right);
    }

    return arr;
}

const partition = (arr, pivot, left, right) => {
    let pivotElement = arr[pivot];
    let partIndex = left;

    for(let i = left; i < right; i++) {
        if(arr[i] < pivotElement) {
            swap(arr, i, partIndex);
            partIndex++;
        }
    }
    swap(arr, right, partIndex);
    return partIndex;
}

const swap = (arr, i , j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const array = [6,1,4,2,5,3];
console.log(quickSort(array, 0, array.length - 1));