var warble = 'Today has been a lovely day of psychosomatic liberation. Tomorrow, who knows? I do not. Each new day is another confrontation if our inevitable end, the best we can hope for is a long life with good memories.';

function justify(str, len) {
  var splitter = str.split(" ");
  var counter = 0;
  var newStr = null;
  for (i = 0; i < splitter.length; i ++) {
    counter += 
    newStr += splitter[i] + ' ';
    if (counter % len === 0) {
      newStr += '\n'
    }
  }
  return newStr
};


console.log(justify(warble, 20));
