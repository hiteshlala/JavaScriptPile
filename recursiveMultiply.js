/**
 *  Recursive Multiplication
 *
 *  Write a recursive function to multiply two positive integers without using 
 *  the * operator.  You can use addition, subtraction, and bit shifting, but 
 *  you should minimize the number of those operations.
 *  
 */

var multiplyRecurs = function(a, b) {
  if(a === 0 || b === 0) {
    return 0;
  }

  if(a < 0 && b < 0) {
    a = Number( (String(a)).slice(1) );
    b = Number( (String(b)).slice(1) );

  } else if(a > 0 && b < 0) {
    a = Number( "-" + String(a) );
    b = Number( (String(b)).slice(1) );
  }

  var mult = function(a, b, result) {
    result = result || 0;
    if(b === 0) {
      return result;
    } else {
      result += a;
      return mult(a, b - 1, result);
    }
  };

  return mult(a, b);
};
// console.log(multiplyRecurs(-2,5));
// console.log(multiplyRecurs(3,-5));
// console.log(multiplyRecurs(-9,-5));
// console.log(multiplyRecurs(12,5));
// console.log(multiplyRecurs(12,0));


/**
 *  looking at bit manipulations
 *
 *  seems javascript uses a 32 bit word length and 32nd bit is sign bit 
 */
var a = -1;
var b = 1 << 31;
var c = a & b;
var d = c >>> 31;
var e = 0b011111111111111111111111111111111;
var g = parseInt("011111111111111111111111111111111", 2);
var f = a & e;
var h = e & b;
console.log(a,b,c,d, e, f, g, h);





