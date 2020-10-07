var smallerNumbersThanCurrent = function (nums)
// {
//     let count = 0;
//     let array = [];
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if (nums[i] > nums[j]) {
//                 count++;
//             }
//         }
//         array.push(count);
//         count = 0;
//     }
//     return array;
// };
//runtime 112ms memory 38mb
// {
//     let sort = [...nums].sort((a,b)=>a-b),res=[]
//     let index = {}
//     for(let i =0;i<nums.length;i++){
//         if(!index[sort[i]]){
//             index[sort[i]] = i+1
//         }
//     }
//     for(let i = 0;i<nums.length;i++){
//         res.push(index[nums[i]]-1)
//     }
//     return res
// }
//runtime 120ms memory 36mb
{
    const sorted = Array.from(nums).sort((n1, n2) => n2 - n1)
    const mapping = new Map(sorted.map((num, index) => [num, nums.length - index - 1]))
    return nums.map(num => mapping.get(num))
}
// runtime 64ms //result 84ms and memory 38mb
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
