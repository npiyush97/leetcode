/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0
    for(let i=0;i<height.length;i++){
        for(let j=i+1;j<height.length;j++){
            maxArea = Math.max(maxArea,Math.min(height[i] ,height[j]) * (j - i))
        }
    }
    return maxArea
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))

// Two pointer
// var maxArea = function(height) {
//     let maxArea = 0,l=0,r=height.length-1
//     while(l < r){
//         maxArea = Math.max(maxArea,Math.min(height[l] ,height[r]) * (r - l))
//         if(height[l] < height[r]){
//             l++
//         }
//         else{
//             r--
//         }
//     }
//     return maxArea
// };
// console.log(maxArea([1,8,6,2,5,4,8,3,7]))


let arr  = [1,2,2,4]

console.log(new Set(arr))


