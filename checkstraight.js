var checkStraightLine = function (coordinates) {
// shoelace formula
  let n = coordinates.length;
  if(n <= 1) return false
  for(let i=0;i<n-2;i++){
    const area = Math.abs(1/2 * (
    (coordinates[i][0] * coordinates[i+1][1] + coordinates[i+1][0] * coordinates[i+2][1] + coordinates[i+2][0]*coordinates[i][1])
    -
    (coordinates[i][1]*coordinates[i+1][0] + coordinates[i+1][1]*coordinates[i+2][0]+coordinates[i+2][1]*coordinates[i][0])
    ))
  if(area > 0) return false
  }
  return true
};

console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]));
// let n = coordinates.length;
//   if(n <= 1) return false
//   for(let i=0;i<n-2;i++){
//  const area = Math.abs(1/2 * (
//             (coordinates[i][0] * coordinates[i + 1][1] + coordinates[i + 1][0] * coordinates[i + 2][1] + coordinates[i + 2][0] * coordinates[i][1]) -
//             (coordinates[i][1] * coordinates[i + 1][0] + coordinates[i + 1][1] * coordinates[i + 2][0] + coordinates[i + 2][1] * coordinates[i][0])
//         ));
        
//         if (area > 0) return false;
//   if(area > 0) return false
//   }
//   return true