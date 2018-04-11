function circleIntersection(a,b,r) {
  let width = b[0] - a[0];
  let height = b[1] - a[1];
  let dist = Math.sqrt(Math.pow(width,2) + Math.pow(height, 2));
  let theta = 2 * (Math.asin(r/dist))

  let burp = 2 * (0.5 * Math.pow(r, 2) * (theta - Math.sin(theta)));
  return burp
}






console.log(circleIntersection([0, 0],[7, 0],5));  //14

console.log(circleIntersection([0, 0],[0, 10],10));  //122

console.log(circleIntersection([5, 6],[5, 6],3));  //28

console.log(circleIntersection([38, -18],[46, -29],10))  //64
