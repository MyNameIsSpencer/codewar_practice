
function getPINs(observed) {
  let temps = [],
      alts = {
        "0": ["0","8"],
        "1": ["1","2","4"],
        "2": ["1","2","3","5"],
        "3": ["2","3","6"],
        "4": ["1","4","5","7"],
        "5": ["2","4","5","6","8"],
        "6": ["3","5","6","9"],
        "7": ["4","7","8"],
        "8": ["5","7","8","9","0"],
        "9": ["6","8","9"]
      },
      combos = alts[observed[0]];


  do {
    observed = observed.substr(1);
    nowNumbs = alts[observed[0]];
    for (h=0;h<combos.length; h++) {
      combo = combos[h];
      for (i=0; i<nowNumbs.length; i++) {
        newCombo = combo + nowNumbs[i];
        temps.push(newCombo);
      }
    }
    combos = temps;
    temps = [];
  } while (observed.length > 1);

    return combos;
  }


var blah = getPINs("428");

console.log(blah);
