// Roman Numeral Converter
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

var toRoman = function(num) {
  var lookup = {
    1:'I',2:'II',3:'III',4:'IV',5:'V',6:'VI',7:'VII',8:'VIII',9:'IX',
    10:'X',20:'XX',30:'XXX',40:'XL',50:'L',60:'LX',70:'LXX',80:'LXXX',90:'XC',
    100:'C',200:'CC',300:'CCC',400:'CD',500:'D',600:'DC',700:'DCC',800:'DCCC',900:'CM',
    1000:'M'
  };
  
  var keyValues = [1, 2, 3, 4, 5 , 6, 7, 8, 9,
                   10, 20, 30 , 40, 50, 60, 70, 80, 90,
                   100, 200, 300, 400, 500, 600, 700, 800, 900, 
                   1000];
  
  keyValues.reverse();
  
  var idx = 0;
  var result = "";
  var lowerThan;
  var len = keyValues.length;
  
  while( num > 0 ) {
    
    while(num < keyValues[idx] && idx < len) {
      idx++;
    }
    
    result += lookup[keyValues[idx]];
    num -= keyValues[idx];
    
    idx = 0;
  }

  return result;
};


var toRomanRecursive = function(num) {
  var lookup = {
    1:'I',2:'II',3:'III',4:'IV',5:'V',6:'VI',7:'VII',8:'VIII',9:'IX',
    10:'X',20:'XX',30:'XXX',40:'XL',50:'L',60:'LX',70:'LXX',80:'LXXX',90:'XC',
    100:'C',200:'CC',300:'CCC',400:'CD',500:'D',600:'DC',700:'DCC',800:'DCCC',900:'CM',
    1000:'M'
  };
  
  var keyValues = [1, 2, 3, 4, 5 , 6, 7, 8, 9,
                   10, 20, 30 , 40, 50, 60, 70, 80, 90,
                   100, 200, 300, 400, 500, 600, 700, 800, 900,
                   1000];
  keyValues.reverse();

  var len = keyValues.length;

  var recurse = function(num, result) {
    result = result || "";

    if( num === 0 ) {
      return result;
    } else {
      var idx = 0;
      while(num < keyValues[idx] && idx < len) {
        idx++;
      }
      result += lookup[keyValues[idx]];
      num -= keyValues[idx];
      return recurse(num, result);
    }
  };

  return recurse(num);
};

console.log(toRoman(798)); // DCCXCVIII
console.log(toRomanRecursive(798));