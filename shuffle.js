var shuffle = function (nums, n) {
    let array = []
    for(let i =0;i<nums.length;){
        if(n >= nums.length){
            break;
        }
        array.push(nums[i])
        array.push(nums[n])
        n++;
        i++;
    }
    return array
};
// Runtime 112ms and memory 38mb
console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
{

    let xItems = nums.slice(0,n)
    let yItems = nums.slice(n)
    let result = []
    for(let i=0;i<xItems.length;i++){
        result.push(xItems[i],yItems[i])
    }
    return result
}
// runtime 60ms and memory

