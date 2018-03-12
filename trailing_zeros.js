function zeros (n) {
  let trailers = 0;
  let temp = n;
  while ((temp / 5) >= 1) {
    temp = Math.floor(temp / 5);
    trailers += temp;
  }
  return trailers;
}


console.log(zeros(100));
console.log(zeros(101));
console.log(zeros(125));
