let numberofpaths = (m, n) => {
    if(m == 1 || n == 1) 
        return 1;

    return numberofpaths(m - 1, n) + numberofpaths(m, n-1);
    
}

console.log(numberofpaths(7, 3));