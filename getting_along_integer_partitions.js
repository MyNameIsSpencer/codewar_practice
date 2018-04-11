function part(n) {
  let ranger = [];
  let range = "Range: ";
  let mean = "Average: ";
  let median = "Median: ";
  let combos = [n];

  for (var i = n; i > 0; i --) {
    ranger.push(i);
  }


  return ranger;

}


console.log(part(7));



//     Test.assertEquals(part(1), "Range: 0 Average: 1.00 Median: 1.00")
//     Test.assertEquals(part(2), "Range: 1 Average: 1.50 Median: 1.50")
//     Test.assertEquals(part(3), "Range: 2 Average: 2.00 Median: 2.00")
//     Test.assertEquals(part(4), "Range: 3 Average: 2.50 Median: 2.50")
//     Test.assertEquals(part(5), "Range: 5 Average: 3.50 Median: 3.50")
