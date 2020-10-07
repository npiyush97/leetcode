// var deleteNode = function(node) {
//     if(node.val !== undefined && node.next !== undefined){
//         node.val = node.next.val;
//         node.next = node.next.next;
//     }
// };
// console.log(deleteNode([4,5,1,9],5))

// var isAnagram = function(s, t) {
//     s = s.split('').sort().join('')
//     t = t.split('').sort().join('')
//     if(s === t){
//         return true
//     }
//     return false
// };
// console.log(isAnagram("anagram","nagaram")
// )

var containsDuplicate = function(nums) {
    var obj = {};

    for(var i = 0; i < nums.length; i++){
        obj[nums[i]] = obj[nums[i]] + 1 || 1;

        if(obj[nums[i]] > 1) return true;
    }

    return false;


    // return new Set(nums).size === nums.length
};
console.log(containsDuplicate([1,2,3,4]))


