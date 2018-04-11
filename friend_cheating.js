function removeNb (n) {
  let allSum = 0;
  let tempSum = 0;
  let theArr = [];
  let theBase = Math.floor(n/2);
  if (n % 2 == 0) {
    allSum = (n/2) * (n + 1);
  } else {
    allSum = Math.ceil(n/2) * n;
  }

  for (j= theBase; j< (n); j ++) {
    for (k=j+1; k < (n+1); k ++) {
      tempSum = allSum - j - k;
      let theProduct = j * k;
      if (tempSum === theProduct) {
        theArr.push([j,k]);
        theArr.push([k,j]);
      }
    }
  }
  return theArr
}


console.log(removeNb(10));
console.log(removeNb(17));

console.log(removeNb(155));
console.log(removeNb(188));


//
// for (r= 1; r< 10001; r ++) {
//   let bark = removeNb(r);
//   if (bark !== undefined && bark.length > 2 ) {
//     console.log(r);
//     console.log(bark);
//   }
// }
