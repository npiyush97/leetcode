// var runningSum = function(nums)
// {
//     let add = []
//    nums.reduce(function(a,b,i){return add[i] = a+b},0)
//    return add
// };
// //runtime = 100ms,space=35mb
// {
// let i = 1;
//     while(i<nums.length){
//         if(nums[i] !== undefined){
//             nums[i] += nums[i-1]
//         }
//         i++;
//     }
//     return nums;
// }
// //runtime = 84ms,space=36mb
// {
//    let sum = nums[0];
//     let runningsum = new Array(nums.length);
//     runningsum[0] = nums[0];
//     for( let i =1 ;i< nums.length;i++){
//         sum = sum + nums[i];
//         runningsum[i] = sum;
//     }
//     return runningsum;
// }
// //runtime = 76ms,space=35.8mb
