let sumOddLengthSubarrays = function(arr) {
    // let sum = 0
    // let n = arr.length
    // for(let i=0;i<n;i++){
    //     for(let j=i;j<n;j++){
    //         if((i-j)%2 == 0){
    //             for(let k=i;k<=j;k++){
    //                 sum += arr[k]
    //             }
    //         }
    //     }
    // }
    // return sum
    // let sum,n,prev
    // n = arr.length
    // sum = 0
    // for(let i=0;i<n;i++){
    //     prev = arr[i]
    //     sum += prev
    //     for(let j = i;j<n-2;j+=2){
    //         prev += arr[j+1] + arr[j+2]
    //         sum += prev
    //     }
    // }
    // return sum
    //fastest
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        let ls = 0;
        for (let j=i; j<arr.length; j++) {
            ls += arr[j];
            if ((i+j) % 2 === 0) {
                sum += ls;
            }
        }
    }
    return sum;
};
console.log(sumOddLengthSubarrays([1,4,2,5,3]))


