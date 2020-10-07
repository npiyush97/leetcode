var decompressRLElist = function (nums)
// {
//     let result = [];

//   for (let i = 0; i < nums.length; i += 2) {
//     let freq = nums[i];
//     let val = nums[i + 1];

//     for (let i = 0; i < freq; i += 1) {
//       result.push(val)
//     }
//   }

//   return result;
// };
//runtime 92ms and memory 38mb
{
    let array = []
    let count = 0
    for(let i=0;i<nums.length;i=i+2){
        array.length = array.length + nums[i]
        array.fill(nums[i+1],count,count+nums[i])
        count += nums[i]
    }
    return array
}
console.log(decompressRLElist([1,2,3,4]));
