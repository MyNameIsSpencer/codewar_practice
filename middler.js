function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}



//Another way V
const getMiddle = s => s.substr(s.length - 1 >>> 1, (~s.length & 1) + 1);
