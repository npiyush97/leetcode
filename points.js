var minTimeToVisitAllPoints = function(points) {
    let i=0;
  let res = 0;
  while(i < points.length - 1){
    let x = Math.abs(points[i][0] - points[i+1][0])
        let y = Math.abs(points[i][1] - points[i+1][1])
        res = res + Math.max(x,y)
    i++
  }
  return res
};
console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]))
