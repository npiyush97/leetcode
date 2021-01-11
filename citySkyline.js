var maxIncreaseKeepingSkyline = function(grid) {
    let rows = new Array(grid.length).fill(0)
    let cols = new Array(grid[0].length).fill(0)

    for(let i = 0;i<grid.length;i++){
        for(let j = 0;j<grid[0].length;j++){
            rows[i] = Math.max(rows[i],grid[i][j])
            cols[j] = Math.max(cols[j],grid[i][j])
        }
    }

    let inc = 0

    for(let i=0;i<grid.length;i++){
        for(let j = 0;j<grid[0].length;j++){
            inc += Math.min(rows[i],cols[j]) - grid[i][j]
        }
    }

    console.log( inc)
}

// var maxIncreaseKeepingSkyline = function(grid) {
//     if (!grid.length) return 0;

//     const topSkyline = getTopSkyline(grid);
//     const leftSkyline = getLeftSkyline(grid);

//     // Go through each building to calculate max height that can be increased
//     return grid.reduce((result, row, i) => {
//         return row.reduce((rowResult, height, j) => {
//             return rowResult += Math.min(leftSkyline[i], topSkyline[j]) - height;
//         }, result);
//     }, 0);
// };

// Get highest buildings visible from the left
// function getLeftSkyline(grid) {
//     return grid.map(row => Math.max.apply(0, row));
// }

// Get highest buildings visible from the top
// function getTopSkyline(grid) {
//     return grid[0].map((height, i) =>
//         grid.reduce((max, row, j) => max = Math.max(max, grid[j][i]), 0)
//     );
// }

//     let rowM = {}
//     let colM = {}
//     let sum = 0
//     findMaxRowsCols(grid,rowM,colM)
//     for(let row = 0;row<grid.length;row++){
//       for(let col = 0;col<grid[0].length;col++){
//         let newH  = Math.min(rowM[row],colM[col])
//         if(grid[row][col] < newH){
//           sum += newH - grid[row][col]
//           grid[row][col]= newH
//         }
//       }
//     }
//   console.log(sum)
// };
// let findMaxRowsCols = function(grid,rowM,colM){
//   for(let row = 0;row<grid.length;row++){
//     let max = 0
//     for(let curr = 0;curr<grid[0].length;curr++){
//       if(grid[row][curr] > max){
//         max = grid[row][curr]
//       }
//       rowM[row] = max
//     }
//   }
//   for(let col = 0;col<grid.length;col++){
//     let max = 0
//     for(let curr = 0;curr<grid.length;curr++){
//       if(grid[curr][col] > max){
//         max = grid[curr][col]
//       }
//       colM[col] = max
//     }
//   }

maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]])
// console.clear()
