let stairs = a => {
    if (a === 1) {
        return 1;
    }

    const ar = [];
    ar[0] = 0;
    ar[1] = 1;
    ar[2] = 2;

    for (let i = 3; i <= a; i++) {
        ar[i] = ar[i - 1] + ar[i -2]
    }

    return ar[ar.length - 1];
}

console.log(stairs(6));