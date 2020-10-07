var kidsWithCandies = function (candies, extraCandies) {
    let array = [];
    let max = Math.max(...candies)
    for(let i=0;i<candies.length;i++ ){
        let candy = candies[i]
        array.push(candy + extraCandies  >= max)
    }
    return array
};

console.log(kidsWithCandies([2,3,5,1,3], 3));
// Runtime 60ms and Memory 33mb
