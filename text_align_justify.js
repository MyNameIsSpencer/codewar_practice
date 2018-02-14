var warble = 'Today has been a lovely day of psychosomatic liberation. Tomorrow, who knows? I do not. Each new day is another confrontation of our inevitable end, the best we can hope for is a long life with good memories.';

function justify(str, len) {
  var splitter = str.split(" ");
  var counter = 0;
  var newStr = "";
  var line = [];
  for (i = 0; i < splitter.length; i ++) {
    counter += splitter[i].length;
    if (counter > len) {
      var short = (len - counter + splitter[i].length + 1 + line.length - 1);
      var divider = Math.floor(short / (line.length - 1));
      var remains = short % (line.length - 1);
      for (k = 0; k < (line.length - 1); k ++) {
        for (a = 0; a < divider; a ++) {
          line[k] += " ";
        }
      }
      for (b = 0; b < remains; b++) {
        line[b] += " ";
      }

      for (j = 0; j < line.length; j ++) {
        newStr += line[j]
      }
      newStr += '\n';
      line = [];
      counter = 0;
      line.push(splitter[i]);
      counter += (splitter[i].length + 1);
    } else if (i === (splitter.length - 1)  && len != counter) {
      line.push(splitter[i]);
      for (j = 0; j < (line.length - 1); j ++) {
        newStr += line[j];
        newStr += ' ';
      }
      newStr += line[line.length -1];
    } else if (i === (splitter.length - 1)  && len === counter) {
    } else {
      line.push(splitter[i]);
      counter += 1
    }

  }
  return newStr
};


console.log(justify(warble, 20));
