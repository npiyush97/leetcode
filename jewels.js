var numJewelsInStones = function (J, S) {
    // let t = J.split("");
    // let b = S.split("");
    // let count = 0;
    // for (let i = 0; i < t.length; i++) {
    //     for (let j = 0; j < b.length; j++) {
    //         if (t[i] === b[j]) {
    //             count++;
    //         }
    //     }
    // }
    // return count;
    // very bad
    // runtime 132 ms and 32mb

    const a = J.split("");
    const b = S.split("");
    let count = 0;
    for (let i = 0; i < b.length; i++) {
        if (a.includes(b[i])) {
            count++;
        }
    }
    return count;
};
// runtime 64ms and memory 36mb
console.log(numJewelsInStones("zz", "zZZzZ"));
