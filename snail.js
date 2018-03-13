snail = function(array) {
  let sniffer = [];
  let stank = 0;
  let myNewArray = [];
  function right() {
    let bark = array[0].length;
    for (i = 0; i < bark; i ++) {
      sniffer.push(array[0][0]);
      array[0].shift();
    }
  }

  function down() {
    array.shift();
    for (j = 0; j < array.length; j ++) {
      sniffer.push(array[j][array[j].length-1]);
      array[j].pop();
    }
  }

  function left() {
    while (array[array.length -1].length > 0) {
      sniffer.push(array[array.length -1][array[array.length -1].length-1]);
      array[array.length -1].pop();
    }
  }

  function up() {
    for (k = array.length - 2; k > (-1); k --) {
      sniffer.push(array[k][0]);
      array[k].shift();
    }
    array.pop();
  }

  function flatten() {
    myNewArray = [].concat.apply([], array);
  }
  flatten();

  while (myNewArray.length > 0) {
    right();
    flatten();
    if (myNewArray.length < 1) {
      break;
    }
    down();
    flatten();
    if (myNewArray.length < 1) {
      break;
    }
    left();
    flatten();
    if (myNewArray.length < 1) {
      break;
    }
    up();
    flatten();
    if (myNewArray.length < 1) {
      break;
    }
  }
  return sniffer;
}


function snailBetter(array) {
  var vector = [];
  while (array.length) {
    vector.push(...array.shift());
    array.map(row => vector.push(row.pop()));
    array.reverse().map(row => row.reverse());
  }
  return vector;
}




let snail1 = snail([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]);

console.log(snail1);
