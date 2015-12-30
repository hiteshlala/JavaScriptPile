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
  
  var keyValues = [ 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100,
                90, 80, 70, 60, 50, 40, 30, 20, 10,
                9, 8, 7, 6, 5, 4, 3, 2, 1 ];

  var idx = 0;
  var result = "";
  var lowerThan;
  var len = keyValues.length;
  
  while( num > 0 ) {
    // find the largest keyValue that num is less than
    // we need the index
    while(num < keyValues[idx] && idx < len) {
      idx++;
    }
    // take that largest keyValue and add the coresponding
    //  roman numeral to result and subtract that value from
    //  num
    result += lookup[keyValues[idx]];
    num -= keyValues[idx];
    
    //reset the index
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
  
  var keyValues = [ 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100,
                90, 80, 70, 60, 50, 40, 30, 20, 10,
                9, 8, 7, 6, 5, 4, 3, 2, 1 ];

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

console.log(toRoman(5798));
console.log(toRomanRecursive(5798));



// Alex Chou code I reformatted a bit
function convert(num) {
  var numerals = [{1000: "M"}, {900: "CM"}, {500: "D"}, {400: "CD"},
   {100: "C"}, {90: "XC"}, {50: "L"}, {40: "XL"}, {10: "X"}, {9: "IX"},
   {5: "V"}, {4: "IV"}, {1: "I"}, {0: ""}];

  var len = 14;

  if (num === 0) {
    return numerals[len - 1]["0"];
  } else {
    for (var i = 0; i < len; i++) {
      for (var key in numerals[i]) {
        if (num >= key) {
          return numerals[i][key] + convert(num - key);
        }
      }
    }
  }
}
console.log(convert(5798));

// Alex Chou code I refactored a bit more
function convert2(num) {
  var numerals = {1000: "M", 900: "CM", 500: "D", 400: "CD",
   100: "C", 90: "XC", 50: "L", 40: "XL", 10: "X", 9: "IX",
   5: "V", 4: "IV", 1: "I"};

  var key = [ '1000','900','500','400','100','90','50','40','10','9','5','4','1' ];
  var len = 13; // key.length never changes;

  if (num === 0) {
    return "";
  } else {
    for(var i = 0; i < len; i++) {
      if(num >= key[i]) {
        return numerals[key[i]] + convert2(num - key[i]);
      }
    }
  }
}
console.log(convert2(5798));
