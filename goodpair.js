var numIdenticalPairs = function (nums) {
    let array = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j] || i<j) {
                array++;
            }
        }
    }
    return array;
};
console.log(numIdenticalPairs([1,2,3]));
