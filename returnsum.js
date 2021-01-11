var maxProduct = function(nums) {
    // let max = 0
    // for(let i=0,j=nums.length-1;i<j;){
    // max = Math.max(max,(nums[i]-1) * (nums[j]-1))
    // nums[i] < nums[j] ? ++i : --j        
    // }      
    // return max
    let max1 = Math.max(...nums)
    let idx = nums.indexOf(max1)
    nums[idx] = 0
    let max2 = Math.max(...nums)
    return (max1 - 1) * (max2 - 1)
};
console.log(maxProduct([3,4,5,2]))
console.log(maxProduct([1,5,4,5]))
console.log(maxProduct([3,7]))