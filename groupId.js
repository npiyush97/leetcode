var groupThePeople = function (groupSizes)
// {
//     let map = new Map();
//     let ret = [];
//     groupSizes.forEach((size, i) => {
//         if (!map.has(size) || size === ret[map.get(size)].length) {
//             map.set(size, ret.push([]) - 1);
//         }
//         ret[map.get(size)].push(i);
//     });
//     return ret;
// faster 96ms
// };
{
    let map = {};
    for (let i = 0; i < groupSizes.length; i++) {
        if (!map[groupSizes[i]]) map[groupSizes[i]] = [];
        map[groupSizes[i]].push(i);
    }
    let ans = [];
    for (let key in map) {
        let arr = [];
        for (let i = 0; i < map[key].length; i++) {
            arr.push(map[key][i]);
            if (arr.length == key) {
                ans.push([...arr]);
                arr = [];
            }
        }
    }
    return ans;
};
// 148 ms memroy same 42mb
console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
