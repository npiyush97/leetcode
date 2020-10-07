var balancedStringSplit = function (s) {
    // let val = 0,res=0
    // for(let x of s){
    //     x === 'R' ? val++ : val--
    //     if(val === 0){
    //         res++
    //     val=0
    //     }

    // }
    // return res
    //runtime 108 ms memroy 37mb
    //next
    // let countStr = 0,
    //     r = 0,
    //     l = 0;
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] === "R") r++;
    //     if (s[i] === "L") l++;
    //     if (r === l) {
    //         r = l = 0;
    //         countStr += 1;
    //     }
    // }
    // return countStr;
    //runtime 76ms memory 36mb
    //
    let array = s.split('');
    let count = 0;
    let num = 0;
    array.forEach(ele=>{
        if(ele === 'L') count ++;
        if(ele === 'R') count --;
        !count?num++:null
    })
    return num;
    //52ms same memory
};
console.log(balancedStringSplit("RLRRLLRLRL"));
