module.exports = function reverse (n) { 
  let str = Math.abs(n).toString();
  let resultNum = 0;
  for (let i = 0; i < str.length; i += 1){
    resultNum += str[i] * Math.pow(10,i);
  }

  return resultNum;

}
