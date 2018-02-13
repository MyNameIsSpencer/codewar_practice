var warble = 'Today has been a lovely day of psychosomatic liberation. Tomorrow, who knows? I do not. Each new day is another confrontation if our inevitable end, the best we can hope for is a long life with good memories.';

function justify(str, len) {
  var splitter = str.split(" ");
  var counter = 0;
  var newStr = "";
  var line = [];
  for (i = 0; i < splitter.length; i ++) {
    counter += splitter[i].length + 1
    if (counter > (len - 1)) {
      line.pop();
      let short = counter - splitter[i].length - 2
      // line.push('\n');
      for (j = 0; j < line.length; j ++) {
        newStr += line[j]
      }
      newStr += '\n';
      line = [];
      counter = 0;
      line.push(splitter[i]);
      line.push(" ");
    } else if (i === splitter.length) {
      line.push(splitter[i]);
      for (j = 0; j < line.length; j ++) {
        newStr += line[j]
      }
    } else {
      line.push(splitter[i]);
      line.push(" ");
    }

  }
  return newStr
}


console.log(justify(warble, 20));
