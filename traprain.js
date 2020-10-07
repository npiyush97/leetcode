var trap = function (height) {
    //92 ms 37mb
    // let leftMax = -1,
    //     rightMax = -1,
    //     left = 0,
    //     right = height.length - 1,
    //     res = 0;
    // while (left <= right) {
    //     leftMax = height[left] > leftMax ? height[left] : leftMax;
    //     rightMax = height[right] > rightMax ? height[right] : rightMax;
    //     if (leftMax > rightMax) {
    //         res += rightMax - height[right];
    //         right--;
    //     } else {
    //         res += leftMax - height[left];
    //         left++;
    //     }
    // }
    // return res;
    // 64-68 ms 37mb
    var results = 0,
        l = 0,
        r = height.length - 1,
        lmax = 0,
        rmax = 0;

    while(l < r){
        lmax = lmax > height[l] ? lmax : height[l];
        rmax = rmax > height[r] ? rmax : height[r];
        results += lmax < rmax ? lmax - height[l++] : rmax - height[r--]
    }
    return results
};
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
