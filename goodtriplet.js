// var countGoodTriplets = function (arr, a, b, c) {
//     let length = arr.length;
//     let empty = 0;
//     for (let i = 0; i < length; i++) {
//         for (let j = i + 1; j < length; j++) {
//             if (Math.abs(arr[i] - arr[j]) > a) continue;
//             for (let k = j + 1; k < length; k++) {
//                 if (Math.abs(arr[j] - arr[k]) > b) continue;
//                 if (Math.abs(arr[k] - arr[i]) <= c) empty++;
//             }
//         }
//     }
//     return empty;
// };
// console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3));
// var removeOuterParentheses = function(S) {
//     let counter = 0;
//     let result = '';

//     for (let i = 0; i < S.length; i++) {
//         if ((S[i] === '(' && ++counter !== 1) || (S[i] === ')' && --counter !== 0)) {
//             result += S[i];
//         }
//     }

//     return result;};
// console.log(removeOuterParentheses('()()'))
var merge = function(nums1, m, nums2, n) {
    let rem = nums1.splice(m, m);
    var insertPos = m + n - 1;
        m--; n--;
        while (n >= 0) {
            nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
        }
    };
merge([1,2,3,0,0,0],3,[2,3,5],3)
