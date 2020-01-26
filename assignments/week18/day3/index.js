const mergeSort = arr => {
    const len = arr.length;
    if(len == 1) {
        return arr;
    }

    const mid = Math.floor(len / 2);
    let left = arr.splice(0, mid);
    let right = arr;

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}

const merge = (left, right) => {
    const result = [];

    while(left.length > 0 && right.length > 0) {
        if(left[0] > right[0]) {
            result.push(right[0]);
            right.splice(0, 1);
        } else {
            result.push(left[0]);
            left.splice(0, 1);
        }
    }

    while(left.length > 0) {
        result.push(left[0]);
        left.splice(0, 1);
    }

    while(right.length > 0) {
        result.push(right[0]);
        right.splice(0, 1);
    }

    return result;
}

console.log(mergeSort([5,7,2,4,1,3,6]));