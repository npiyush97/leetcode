var rob = function (nums) {
    // 76ms and 36mb
    // return nums.reduce((acc, cur) => [acc[1], Math.max(acc[1], acc[0] + cur)], [0, 0])[1];

    // if(nums == null || nums.length === 0) return 0
    // if(nums.length == 1) return nums[0]
    // let dp = []
    // dp[0] = nums[0]
    // dp[1] = Math.max(nums[0],nums[1])
    // for(let i=2;i<nums.length;i++){
    //     dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i])
    // }
    // return dp[nums.length-1]

    //60ms
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || i === 1) {
            max = Math.max(max, nums[i]);
        } else {
            max = Math.max(nums[i-2] + nums[i], nums[i-1]);
        }

        nums[i] = max;
    }

    return max;
};
console.log(rob([2,7,9,3,1]));
