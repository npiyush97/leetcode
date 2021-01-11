var maxSubArray = function (nums) {
  if (nums.length == 0) return 0;
  if (nums.length == 1) return nums;
  let sum = 0
  let res = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    res = Math.max(sum, res);
    sum = sum < 0 ? 0 : sum;
  }
  return res;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
//  4, -1, 2, 1, -5, 4]);
// // return nums.length == 1 ? nums : nums.length < 1 ?  console.log('No input') : console.log('starting for loop')
// if(nums.length == 1){
//     console.log(nums)
// }
// if(nums.length == 0){
//     console.log('No Input')
// }
// for(let i=0; i< nums.length-1;i++){
//     res.push(nums[i] + nums[i+1])
// }
// return Math.max(...res)

// var maxSubArray = function(nums) {
//     if(nums.length == 0) return 0;
//     let result = Number.MIN_SAFE_INTEGER;
//     let sum = 0;
//     for(let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//         result = Math.max(sum, result);
//         sum = sum < 0 ? 0 : sum;
//     }
//     return result;
// };
