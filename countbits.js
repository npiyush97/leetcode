var countBits = function (num) {
    //runtime 160ms memory 42mb
    // const result = [0];
    // let offset = 1;
    // for (let i = 1; i <= num; i++) {
    //     if (offset * 2 === i) offset *= 2;
    //     result[i] = result[i - offset] + 1;
    // }
    // return result;
    //runtime 100ms and memory 43mb
    // const ans = [0];
    // let base = 1;
    // for (let i = 0; i < num + 1; i++) {
    //     if (i === base) {
    //         ans.push(1);
    //         base *= 2;
    //     } else {
    //         ans[i] = ans[i - base / 2] + 1;
    //     }
    // }
    // return ans
    //runtime 80-136ms and memory 43mb
    // const ans = [0];
    // let base = 1;
    // for (let i = 1,j=0; i <= num; i++,j++) {
    //     if (i === base*2) {

    //         base *= 2;
    //     }
    //     ans[i] = ans[i - base] + 1;

    // }
    // return ans
    //runtime 96ms  and memory near same
    // const ans = [0];
    // for (let i = 1; i <= num; i++) {
    //     if (i%2 === 0) ans[i] = ans[~~(i/2)]
    //     else ans[i] = ans[~~(i/2)] + 1;

    // }
    // return ans
    //bits mani
    //runtime 164ms  and memory near same
    const ans = [0];
    for (let i = 1; i <= num; i++) {
    const half = i>>1;
    const odd = i&1;
    ans[i] = ans[half] + odd
    }
    return ans

};
console.log(countBits(2));
