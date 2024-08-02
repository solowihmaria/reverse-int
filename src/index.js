module.exports = function reverse(n) {
    
    let str = Math.abs(n).toString();
    let result = '';
    let i = 0;
  
    while (i < str.length) {
      result = str[i] + result;
      i++;
    }
  
    return parseInt(result);
  };
  