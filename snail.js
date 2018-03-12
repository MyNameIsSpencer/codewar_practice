snail = function(array) {
  let sniffer = [];
  let counter = 0;
  function down(burp) {
    for (j = 0; j < burp.length; j ++) {
      counter = array.indexOf(burp[j]);
      sniffer.push(burp[j][burp.length-1]);
      array[j].pop();
    }
  }


  // var a = fruits.indexOf("Apple");

  function left(barf) {

  }

  if (array.length > 0) {

  }
  for (i = 0; i < array.length; i ++) {

  }
  // array[0].map( number => sniffer.push(number));
  down(array);
  console.log(counter);
  return sniffer;
}

let snail1 = snail([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]);

console.log(snail1);
