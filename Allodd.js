var sumOddLengthSubarrays = function(arr) {
    let count  = 0
    for(let i=0;i<arr.length;i++){
        for(let j = i;j<arr.length;j++){
            if((i-j)%2 == 0){
                for(let k = i;k<=j;k++){
                    count += arr[k]
                    console.log(arr[k])
                }
            }
        }
    }
    return count
};
// let n, prev, sum;
// n = arr.length;
// sum = 0;
// for (let i = 0; i < n; i++) {
//   prev = arr[i];
//   sum += prev;
//   for (let j = i; j < n - 2; j += 2) {
//     prev += arr[j + 1] + arr[j + 2];
//     sum += prev;
//   }
// }
// return sum;
console.log(sumOddLengthSubarrays([1,4,2,5,3])
)


