const isValidString = str => {
    if(str == "") {
        return true;
    }

    const stack = [];

    for (let char of str) {
        if (char === '[')
            stack.push(']')
        else if (char === '{')
            stack.push('}')
        else if (char === '(')
            stack.push(')')
        else if (stack.length === 0 || char !== stack.pop()) {
            return false;
        }
    }

    if (stack.length === 0)
        return true;
    else
        return false;
}        

console.log(isValidString(`({[]})`));