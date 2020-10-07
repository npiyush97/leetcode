var findNumbers = function (nums) {
    let count = 0;
    // for(let i=0;i<nums.length;i++){
    //     let num = String(nums[i])
    //     if(num.length % 2==0) count++
    // }
    // return count
    // //runtime 64ms
    for (let i = 0; i < nums.length; i++) {
        if (nums[i].toString().length % 2 == 0) count++;
    }
    return count
};
console.log(findNumbers([122, 345, 6, 7896]));
