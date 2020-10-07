var isValid = function (s) {
    // 84ms 36mb
    let stack = [];
    for (let par of s) {
        if (par === "(") stack.push(")");
        else if (par === "{") stack.push("}");
        else if (par === "[") stack.push("]");
        else if (stack.pop() !== par) return false;
    }
    return stack.length === 0;
};
console.log(isValid("([)]"));
