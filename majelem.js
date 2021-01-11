var majorityElement = function (nums) {
    //72-84ms 34mb
    // let map = new Map();
    // let maxLen = Math.floor(nums.length / 2);
    // if (!nums || nums.length == 0) return -1;
    // for (let n of nums) {
    //     let freq;
    //     if (map.has(n)) {
    //         freq = map.get(n) + 1;
    //     } else {
    //         freq = 1;
    //     }
    //     map.set(n, freq);
    //     if (freq > maxLen) return n;
    // }
    // return nums[0];
    // 68-120ms 38mb
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = (map[nums[i]] || 0) + 1;
        if (map[nums[i]] > nums.length / 2) return nums[i];
    }
    //lowest memory
    // if(nums.length < 1) return;
    // nums.sort();
    // let half = Math.trunc(nums.length/2);
    // return nums[half];
};
console.log(majorityElement([3,2,3,2,4,2]));
