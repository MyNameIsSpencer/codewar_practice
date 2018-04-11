function incrementString (n) {

  if (/\d/.test(n) == true) {
    let burp = n.split("");
    let nowNum = '';
    let newStr = '';
    let zeros = '';
    for (i = 0; i < burp.length; i ++) {
      if (/\d/.test(burp[i]) != true) {
        newStr += burp[i];
      } else {
        if (burp[i] == '0') {
          zeros += '0'
        } else {
          nowNum += burp[i];
        }
      }
    }
    if (nowNum == ''){
       zeros =  zeros.substr(1);
      newStr += zeros;
      newStr += '1';
      return newStr;
    } else {
      let newNum = parseInt(nowNum) + 1;
      let digitCount = newNum.toString().length;
      if (digitCount > nowNum.length) {
        zeros =  zeros.substr(1);
      }
      newStr += zeros;
      newStr += newNum;
      return newStr;
    }

  } else {
    return n + '1';
  }
}

console.log(incrementString('foo'));
console.log(incrementString('bar01'));
console.log(incrementString('wart0099'));
console.log(incrementString('wart000'));



//  Better solution  V
//
// function incrementString(input) {
//   return input.replace(/([0-8]?)(9*)$/, function(s, d, ns) {
//       return +d + 1 + ns.replace(/9/g, '0');
//     });
// }
