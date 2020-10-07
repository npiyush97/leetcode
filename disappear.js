var findDisappearedNumbers = function (nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] !== i + 1 && nums[i] !== undefined) {
            let temp = nums[nums[i] - 1];
            if (temp === nums[i]) {
                nums[i] = undefined;
            } else {
                nums[nums[i] - 1] = nums[i];
                nums[i] = temp;
            }
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === undefined) {
            res.push(i + 1);
        }
    }
    return res;
};
console.log(findDisappearedNumbers([1, 3, 4, 6, 9]));
