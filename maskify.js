// return masked string
function maskify(cc) {
  var hashes = '';
  for (i = 0; i < cc.slice(0, -4).length; i ++) {
    hashes += '#';
  }
  return (hashes += cc.slice(-4));
}



var heeeyyy = "HHhhhhheeeEEEEEeeeeyy";
const numb = heeeyyy.slice(0, -4).length;
const pracfer = `${"#" * numb}`;
const firstfer = heeeyyy.slice(0, -4);
var hashes = '';
for (i = 0; i < heeeyyy.slice(0, -4).length; i ++) {
  hashes += '#';
}


console.log(maskify(heeeyyy));
console.log(numb);
console.log(hashes);
//
//
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
//
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
//
// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""
//
// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"
