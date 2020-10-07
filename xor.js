var xorOperation = function (n, start) {
    // let nums = [];
    // let result;
    // for (let i = 0; i < n; i++) {
    //     nums.push(start + 2 * i);
    // }
    // for (let i = 0; i < nums.length; i++) {
    //     result ^= nums[i];
    // }
    // return result;
    //runtinme 76ms and memory 36mb
    // return _.times(n, (i) => start + 2 * i).reduce((acc, v) => (acc ^= v), 0);
    //runtime 100ms and memory 32mb
};
// console.log(xorOperation(5, 0));
// console.log(xorOperation(4, 3));
// console.log(xorOperation(1, 7));
// console.log(xorOperation(10, 5));

//fib
let fib = (n) => {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
};
console.log(fib(6));

let fib1 = (z, sum = 0, prev = 1) => {
    if (z <= 1) return sum;
    return fib(z - 1, prev + sum, sum);
};
console.log(fib1(6));
