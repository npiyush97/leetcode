// var oddCells = function (n, m, indices) {
//   const r = new Uint8Array(n);
//   const c = new Uint8Array(m);
//   let oddRow = 0;
//   let oddColumn = 0;
//   for (let i = 0; i < indices.length; ++i) {
//     (++r[indices[i][0]] & 1) === 1 ? ++oddRow : --oddRow;
//     (++c[indices[i][1]] & 1) === 1 ? ++oddColumn : --oddColumn;
//   }
//   return oddRow * m + oddColumn * n - 2 * oddRow * oddColumn;
// };

var oddCells = function(n, m, indices) {
    const arr = Array.from({ length: n }, () => new Array(m).fill(0));
    for (let d of indices) {
        arr[d[0]] = arr[d[0]].map(x => x + 1);
        arr.forEach(r => r[d[1]] += 1);
    }
    return arr.reduce((accum, curr) => accum + curr.filter(n => n % 2 === 1).length, 0)
};

// const oddCells = (n, m, indices) => {
//   const r = new Uint8Array(n);
//   const c = new Uint8Array(m);
//   let ret = 0;

//   for (let i = 0; i < indices.length; ++i) {
//     ++r[indices[i][0]];
//     ++c[indices[i][1]];
//   }

//   for (let i = 0; i < n; ++i) {
//     for (let j = 0; j < m; ++j) {
//       ((r[i] ^ c[j]) & 1) === 1 && ++ret;
//     }
//   }
//   console.log(r, c);
//   console.log(ret);
// };
console.log(oddCells(2, 3, [[0, 1],[1, 1],]));
// bruteforce
// let matrix = []
// let ret = 0;
// for(let i = 0;i<n;i++){
//     matrix[i] = new Uint8Array(m)
// }
// for(let i=0;i<indices.length;i++){
//     const [r,c] = indices[i]
//     for(let j=0;j<m;j++) ++matrix[r][j]
//     for(let j=0;j<n;j++) ++matrix[j][c]
// }
// for(let i=0;i<n;i++){
//     for(let j=0;j<m;j++){
//         if(matrix[i][j] % 2 == 1)
//         ret++
//     }
// }
// console.log(ret)
// console.log(matrix)
