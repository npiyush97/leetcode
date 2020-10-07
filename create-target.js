var createTargetArray = function (nums, index) {
    let array = [];
//splice
    // for (let i = 0; i < nums.length; i++) {
    //     const num = nums[i]
    //     const currentIdx  = index[i]
    //     array.splice(currentIdx,0,num)
    // }
//map
    nums.map((nums,i)=>{
        array.splice(index[i],0,nums)
    })
    // for (let i =0;i<index.length;i++){
    //     if(array[index[i]] == undefined){
    //         array[index[i]] = nums[i]
    //     }
    //     else{
    //         let left = array.slice(0,index[i])
    //         left.push(nums[i])
    //         let right = array.slice(index[i])
    //         array = [].concat(left,right)
    //     }
    // }
    return array;
};
console.log(createTargetArray([0, 1, 2, 3, 4],[0,1,2,2,1]));


