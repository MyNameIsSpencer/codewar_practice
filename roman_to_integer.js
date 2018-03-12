
function solution(roman){
  let splitter = roman.split("");
  let tempNum = 0;
  let newNum = 0;
  let codex = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
    }

    for (i=0; i < splitter.length; i++) {
      if (codex[splitter[i]] < codex[splitter[i+1]]) {
        tempNum += codex[splitter[i]];
        newNum -= tempNum;
        tempNum = 0;
      } else if (codex[splitter[i]] > codex[splitter[i+1]]) {
        tempNum += codex[splitter[i]];
        newNum += tempNum;
        tempNum = 0;
      } else if (codex[splitter[i]] == codex[splitter[i+1]]) {
        tempNum += codex[splitter[i]]
      } else {
        tempNum += codex[splitter[i]]
        newNum += tempNum;
      }
    }
  return newNum;
}


console.log(solution("XXIII"));
console.log(solution("MDMCCIIX"));
console.log(solution("CXC"));
