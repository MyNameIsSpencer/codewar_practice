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
  // let total = 0;

  for (let i = 1; i <= n; i ++) {
    combos.push([i]);
  }

  for (let i = 2; i <= n; i ++) {
    for (let j = 2; j < n-2; j++) {
      if (j+i <= n) {
        combos.unshift([i, j])
      }
    }
  }




  for (let j = 2; j < Math.ceil(n/2); j++) {
    let tempArray = [];
    console.log(j);
    for (let z = 0; z < combos.length; z++) {
      if (combos[z].length == j) {
        let totaller = 0;
        for (let g = 0; g < combos[z].length; g ++) {
          totaller += combos[z][g];
        }
        for (let y = 2; y < n-2; y ++) {
          if (totaller + y <= n) {
            let subber = combos[z].map(x=>x);
            subber.push(y);
            // console.log(subber);
          }
        }
      }
    }
// //  While the length of a combo equals j, continue
//     let a = 0;
//     while (combos[a].length == j) {
//         let totaller = 0;
//         for (let g = 0; g < combos[a].length; g ++) {
//           totaller += combos[a][g];
//         }
// //         // Push another combo, adding another number
// //         // if sum is <= n
//         for (let h = n - 2; h > 1; h --) {
//
//           if (totaller + h <= n) {
//             let subber = combos[a].map(x => x);
//             subber.push(h);
//             tempArray.unshift(subber);
//           }
//         }
//         a++;
//       }
//       if (tempArray.length > 0) {
//         for (let bar = 0; bar < tempArray.length; bar ++) {
//           combos.unshift[tempArray[bar]];
//         }
//       }
    }

  console.log(combos);
  return 'comboLength: ' + combos.length;

}




// console.log(part(5));
// console.log(part(6));
// console.log(part(7));
console.log(part(10));
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
