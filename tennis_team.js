function maximizePoints(team1, team2) {
  let sorted1 =  team1.sort(function(a, b){return a-b});
  let sorted2 =  team2.sort(function(a, b){return a-b});
  let tempArr = 0;
  for (i = 0; i < team2.length; i ++) {
    for (j = 0; j < team1.length; j ++) {
      if (sorted1[j] > sorted2[i]) {
        tempArr += 1;
        sorted1.splice(j, 1);
        break;
      }
    }
  }
  return tempArr;
}

team1 = [85,89,40,60,23,75,59,74,68,94,45,16,90,74,98,35,67]
team2 = [13,24,62,63,28,33,53,40,83,2,42,2,4,79,56,66,23]

console.log(maximizePoints(team1,team2));
