let lengthOfLastWord = s => {
    let count = 0,
        flag = false,
        length = s.length;
    
    for (let i = length - 1; i >= 0; i--) {
        if (s.charAt(i) !=  ` `) {
            count++;
            flag = true
        } else if (!flag) {
            continue;
        } else {
            break;
        }
    }
    return count;
 };
console.log(lengthOfLastWord(`yusuf world`));