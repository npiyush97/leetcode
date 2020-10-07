var checkPossibility = function(nums) {
    let count = 0
     for(let i=0;i+1<nums.length;++i){
         if(nums[i]>nums[i+1]){
             if(++count>1){
                 return false;
             }
             if(i>0&&nums[i-1]>nums[i+1]){
                 nums[i+1] =nums[i];
             }
         }
     }
     return true
 };
console.log(checkPossibility([4,2,3]))
