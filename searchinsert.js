/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
//   let low = 0
//   let high = nums.length-1;
//   while (low <= high) {
//     let mid = Math.floor((low + high)/ 2);
//     if (nums[mid] === target) {
//       return mid
//     }
//     if(nums[mid] < target){
//       low = mid+1;
//       continue
//     }
//     if(nums[mid] > target){
//         high = mid - 1
//         continue
//     }
//     return mid;
//   }
//   return low
    // for(let i=0;i<nums.length;i++){
    //     if(nums[i] === target || target < nums[i]){
    //         return i
    //     }
    // }
    // return nums.length
    return nums.filter(x => x <target).length
};
console.log(searchInsert([1, 3, 5, 6,7,9], 4));


