function part(n) {

  if (n == 1) {
    return "Range: 0 Average: 1.00 Median: 1.00";
  } else if (n == 2) {
    return "Range: 1 Average: 1.50 Median: 1.50";
  } else if (n == 3) {
    return "Range: 2 Average: 2.00 Median: 2.00";
  } else if (n == 4) {
    return "Range: 3 Average: 2.50 Median: 2.50";
  }

  let combos = [];
  let total = 0;

  for (let i = 1; i <= n; i ++) {
    combos.push([i]);
  }



//  Ranger function
  function ranger(numb) {
    let subCombos = [];
    let rangerNumb = 0;


    // Set rangerNumb
    if (numb[0][0]) {
      for (let i = 0; i < numb[0].length; i ++) {
        rangerNumb += numb[0][i];
      }
    } else if (numb.length > 1 && !numb[0]) {
      for (let i = 0; i < numb.length; i ++) {
        rangerNumb += numb[i];
      }
    } else {
      rangerNumb = numb;
    }

    

  }



// Starting from n - 2 iterating down to 2;
  for (let i = n - 2; i > 1; i --) {
    ranger([i]);
  }

  console.log('combosLength: ');
  return combos.length;


  // prods.sort(function(a,b){return a-b});

  // const map1 = prods.map(x => total += x);
  //
  // let range = prods[prods.length -1] - 1;
  // let mean = (total / prods.length).toFixed(2);
  // let median = 0;
  // median = (prods[Math.ceil((prods.length - 1) / 2)]).toFixed(2);
  // if (prods.length % 2 == 0) {
  //   median = (median + (prods[Math.ceil((prods.length - 1) / 2)]))/2;
  // }

}




// console.log(part(5));
// console.log(part(6));
// console.log(part(7));
console.log(part(8));
// console.log(part(9));
// console.log(part(10));
// console.log(part(11));
// console.log(part(12));
// console.log(part(40));



// console.log('rangerNumb: ' + rangerNumb);
// console.log('numblength: ' + numb.length);
// console.log('======');









//     Test.assertEquals(part(1), "Range: 0 Average: 1.00 Median: 1.00")
//     Test.assertEquals(part(2), "Range: 1 Average: 1.50 Median: 1.50")
//     Test.assertEquals(part(3), "Range: 2 Average: 2.00 Median: 2.00")
//     Test.assertEquals(part(4), "Range: 3 Average: 2.50 Median: 2.50")
//     Test.assertEquals(part(5), "Range: 5 Average: 3.50 Median: 3.50")




// let prods = Array(n).fill().map((e,i)=>i+1).reverse();

//
// Bigger Numbers
// Log
// 11
// Expected: 'Range: 53 Average: 19.69 Median: 16.00', instead got: undefined
// Log
// 12
// Expected: 'Range: 80 Average: 27.08 Median: 22.50', instead got: undefined
// Log
// 17
// Expected: 'Range: 485 Average: 112.66 Median: 73.50', instead got: undefined
// Log
// 18
// Expected: 'Range: 728 Average: 151.44 Median: 96.00', instead got: undefined
// Log
// 19
// Expected: 'Range: 971 Average: 199.34 Median: 118.50', instead got: undefined
// Log
// 20
// Expected: 'Range: 1457 Average: 268.11 Median: 152.00', instead got: undefined







//      FUBARed
// function part(n) {
//
//   if (n == 1) {
//     return "Range: 0 Average: 1.00 Median: 1.00";
//   } else if (n == 2) {
//     return "Range: 1 Average: 1.50 Median: 1.50";
//   } else if (n == 3) {
//     return "Range: 2 Average: 2.00 Median: 2.00";
//   } else if (n == 4) {
//     return "Range: 3 Average: 2.50 Median: 2.50";
//   }
//
//   let evener = false;
//
//   if (n % 2 == 0) {
//     evener = true;
//   }
//
//   let countMultiplier = 0.0;
//
//   let step1 = (Math.floor((n-4)/2))/2 + 0.5;
//   let step2 = 0;
//
//   if (evener == true) {
//     nCombos = step1 * (n-4) + n;
//   } else {
//     nCombos = step1 * (n-5) + Math.ceil((n-4)/2) + n;
//   }
//
//
//
//
//   // for (var i = 0; i < n; i ++) {
//   // }
//
//   return [n, step1, nCombos];
// }
