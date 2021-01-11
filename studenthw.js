var busyStudent = function (startTime, endTime, queryTime) {
  // for (let i = 0; i < startTime.length; i++) {
  //     count += startTime[i] <= queryTime && queryTime <= endTime[i] ? 1 : 0
  // }
  // startTime.forEach((startTime, index) => {
  //     if(startTime <= queryTime && endTime[index] >= queryTime) {
  //         count++
  //     }
  // })
  // filter
  // let count = startTime.filter((t,i) =>  queryTime >= t && queryTime <= endTime[i]).length
  //reduce
  let count = startTime.reduce(
    (prev, t, i) =>
      queryTime >= t && queryTime <= endTime[i] ? prev + 1 : prev,
    0
  );
  console.log(count);
};
busyStudent([1, 2, 3], [3, 2, 7], 4);
busyStudent([4], [4], 4);
busyStudent([1, 1, 1, 1], [1, 3, 2, 4], 7);
busyStudent(
  [9, 8, 7, 6, 5, 4, 3, 2, 1],
  [10, 10, 10, 10, 10, 10, 10, 10, 10],
  5
);
