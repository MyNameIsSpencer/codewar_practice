function sumIntervals(intervals){
  let keeper = [];
  for (i=0;i < intervals.length; i++) {
    for (j=intervals[i][0]; j < intervals[i][intervals[i].length - 1]; j ++) {
      if (keeper.includes(j) == false){
        keeper.push(j);
      }
    }
  }
  return keeper.length;
}

console.log(sumIntervals([[1,4], [5,8], [3,14]]));
