function middlePermutation(s) {
  if (s.length < 2) return s;
  s = s.split("").sort().join("");
  console.log('=======');

  if (s.length % 2 == 0) {
    let returner = s[s.length / 2 - 1];
    s = s.slice(0, (s.length / 2 - 1)) + s.slice(s.length / 2);
    returner +=  s.split("").reverse().join("");
    return returner
  } else {
    let odder = s[Math.floor(s.length / 2)];
    let neighbor = s[Math.floor(s.length / 2) - 1];
    let ender = s.slice(0, Math.floor(s.length / 2) - 1).split("").reverse().join("");
    let middler = s.slice(Math.floor(s.length / 2) + 1).split("").reverse().join("");
    return odder += neighbor += middler += ender;
  }


  //    BELOW IS UNNECESSARY CODE
  // function innerPerms(s)  {
  //   if (s.length < 2) return s;
  //   let perms = [];
  //
  //   for (var i = 0; i < s.length; i ++) {
  //     let char = s[i];
  //     if (s.indexOf(char) != i)
  //       continue;
  //     let remaining = s.slice(0,i) + s.slice(i+1, s.length);
  //
  //     for (var subPerms of innerPerms(remaining))
  //       perms.push(char + subPerms)
  //   }
  //   return perms
  // }
  // let outerPerms = innerPerms(s);
  // if (outerPerms.length % 2 == 0){ return outerPerms[outerPerms.length / 2 - 1]}
  // else { return outerPerms[Math.ceil(outerPerms.length / 2) - 1]}
}

console.log(middlePermutation('r'));
console.log('=======');

console.log(middlePermutation('abc'));
console.log('=======');

console.log(middlePermutation('abcde'));
console.log('=======');

console.log(middlePermutation('abcdefghi'));
console.log('=======');



console.log(middlePermutation('qwertyuioasd'));
console.log('=======');




// EFFICIENT CODE V
// function middlePermutation(s) {
//   return (s=s.split([]).sort()).concat(s.splice((l=s.length)/2-1,l%2+1)).reverse().join([]);
// }
