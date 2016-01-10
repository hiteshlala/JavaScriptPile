/**
 * 
 * Contains functions I was interested in and also a bunch of 
 * Recursion Exercises from codewarior and hackerrank
 *
 * Dec 18, 2015
 * 
 */



// very nice way to count consonants using regex
// 
// /g means search entire string
// 	if you dont use this it will simply find the first
// 	if you leave this off you get an array/object hybrid: a = [ letter, index:#, input: "what ever"]
// 			letter is at a[0], but to get to index and input a.index and a.input
// /i means ignore case
// 
// str.match will return an array if found or null if not
function consonantCount(str) {
  return (str.match(/[b-df-hj-np-tv-z]/gi) || []).length;
  //return (str.match(/[b-df-hj-np-tv-z]/gi) || []);
  //return (str.match(/[hit]/));
}


var a = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero necessitatibus, saepe expedita sit doloremque fugiat inventore animi deleniti, sint aliquam.";
var b = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, nemo.";
var c = "HITesh Lala";
//console.log(consonantCount(a));
//console.log(consonantCount(b));
//console.log(consonantCount(c));



var d = consonantCount(c);
//console.log(d);
// console.log(d.length);
// console.log( typeof(d[0]));
// console.log(d.index);
// console.log(d.input);

/**************************************************/

function validateSequence(x) {
  var len = x.length - 1;
  var isValid = true;
  var diff = x[1] - x[0];
  var i = 0;
  
  while(i < len && isValid){
    if( (x[i+1] - x[i]) !== diff ) {
      isValid = false;
    }  
    i++;
  }
  return isValid;
}
/*
console.log(validateSequence([1,2,3,4,5,6,7,8,9]) );//=== true
console.log(validateSequence([1,2,3,4,5,8,7,8,9]));// === false
console.log(validateSequence([2,4,6,8,10]));// === true
console.log(validateSequence([0,2,4,6,8]));// === true
console.log(validateSequence([1,3,5,7,9]));// === true
console.log(validateSequence([1,2,4,8,16,32,64]) );//=== false
console.log(validateSequence([0,1,1,2,3,5,8,13,21,34]));// === false
*/

/**************************************************/

// Computing the GCD
// finding the greatest common divisor modified euclids method
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

// console.log(gcd(77,7));


// euclids greatest common divisor algorithm
function gcd2(a, b){
  if( a === b ) return a;
  return a > b ? gcd2(a-b, b) : gcd2(b-a, a);
}

// console.log(gcd2(7,77));

/**************************************************/

// Fibonacci Numbers
// this sequence starts 1, 1, 2, 3, 5
// so 0th element is 1, 1st element is 1, 2nd is 2
// 

// simple recursive function
function fibonaci(n){
  if(n === 0 || n === 1) return 1;
  return fibonaci(n-1) + fibonaci(n-2);
}

// recursive function with caching
function fibonaciCache(n, cache) {
  cache = cache || {0:1, 1:1};
  if( n in cache ) {
    return cache[n];
  } else {
    cache[n] = fibonaciCache(n - 1, cache) + fibonaciCache(n - 2, cache);
    return cache[n];
  }
}

// iterative version
function fibonaciIterative(n) {
  var third = 0;
  var first = 1;
  var second = 1;
  if(n === 1 || n === 0) {
    result = 1;
  }
  while(n > 1) {
    third = first + second;
    first = second;
    second = third;
    n--;
  }
  return third;

}

for (var i = 0; i < 15; i++) {
  console.log("fib recursive",fibonaci(i));
  console.log("fib recursive with cache", fibonaciCache(i));
  console.log("fib iterative", fibonaciIterative(i));
  console.log("---");
}

/**************************************************/

// Factorial
// return factorial of n
function factorial(n){
  if(n <= 1) return 1;
  return n * factorial(n-1);
}
// console.log(factorial(3));

/**************************************************/

// Pascals Triangle
// The value at nth row and rth column of the triangle 
//   is equal to n! / (r! * (n-r)!)
function pascal(k){
  var triangle = "";

  for (var n = 0; n < k; n++) {
    for (var r = 0; r < n+1; r++) {
      triangle += (factorial(n)/(factorial(r) * factorial(n-r))).toString();
      triangle += " ";
    };

    triangle += "\n";
  };

  return triangle;
}
 // console.log(pascal(5));


// recursive pascals triangle
// returns the number in triangle at (row, col)
//  1
//  1 1
//  1 2 1
//  1 3 3 1
function pascalRec(row, col) {
  // base cases
  if(row == col || col === 0) return 1;

  // recursive case
  return pascalRec(row - 1, col - 1) + pascalRec(row - 1, col);
}

// console.log(pascalRec(3,1));

function buildPascal(k) {
  var out = "";
  for (var i = 0; i < k; i++) {
    for (var j = 0; j <= i ; j++) {
      out += pascalRec(i, j).toString();
      out += " ";
    }
    out += "\n";
  }
  return out;
}

// console.log(buildPascal(5));

function pascalAry(k) {
  var result = [];

  for(var i = 0; i < k; i++) {
    result.push([]);

    for(var j = 0; j <= i; j++) {

      if( j === i  || j === 0) {
        result[i].push(1);
      
      } else {
        result[i].push( result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
  }

  return result.reduce(function(agregate, item){
    return agregate += item.join(" ") + "\n";
  },"");

}

// console.log(pascalAry(5));

/**************************************************/

// Functions and Fractals: Sierpinski triangles
// generates sierpinski triangle with n iterations and 
//   original hight h
function sierpinski(n, h) {
  
  // this generates an array containing a triangle
  //  that has hight h and width = (h * 2 - 1)
  function drawTriangle(h) {
    var image = [];
    var width = h * 2 - 1;
    for (var i = 0; i < h; i++) {
      image[i] = [];
      var edgeIdx = (width - 1) / 2;

      for (var j = 0; j < width; j++) {
        if(j < edgeIdx - i || j > edgeIdx + i ) image[i].push(" ");
        else image[i].push("*");
      }
    }
    return image;
  }

  
  // this is the recursive function and generates sub triangles
  function drawSubTriangles(h, n) {
    var smallTriangle = n === 0 ? drawTriangle(h/2): drawSubTriangles(h/2, n - 1);

    var image = [];
    var width = h * 2 - 1;

    // add top triangle
    for (var i = 0; i < h/2; i++) {
      image.push([]);
      
      for (var j = 0; j < width / 4; j++) {
        image[i].push(" ");
      }

      image[i] = image[i].concat(smallTriangle[i]);
      
      for (var j = 0; j < width / 4; j++) {
        image[i].push(" ");
      }
    }

    //add bottom two triangles
    for (var i = h/2, j = 0; i < h; i++, j++) {
      image.push([]);
      image[i] = image[i].concat(smallTriangle[j]);
      image[i].push(" ");
      image[i] = image[i].concat(smallTriangle[j]);
    }

    return image;
  }

  var image = n === 0 ? drawTriangle(h) : drawSubTriangles(h, n-1);

  // convert image data into a string
  function sendImgStr(ary) {
    var imgStr = "";
    for (var i = 0; i < ary.length; i++) {
       imgStr += ary[i].join("");
       imgStr += "\n";
     }
     return imgStr;
  }
  
  return sendImgStr(image);
}

// console.log(sierpinski(3, 32));


/**************************************************/

// Dragon's Curve
var Dragon = function(n, str) {
  str = str || 'Fa';
  
  if(n === 0 ){
    /*
    while( str.indexOf("a") > -1 || str.indexOf("b") > -1) {
      str = str.replace("a", "");
      str = str.replace("b", "");
    }
    return str;
    */// this while block can be replaced by one line
    return str.replace(/[ab]/g, "");
  }

  
  var aOrb = [];
  for(var i = 0; i < str.length; i++){
    if(str[i] === "a") aOrb.push('aRbFR');
    else if(str[i] === "b") aOrb.push('LFaLb');
    else aOrb.push(str[i]);
  }
  aOrb = aOrb.join("");
  return Dragon(n-1, aOrb);
};
// console.log(Dragon(2));
// FRFRRLFLFR

/**************************************************/

// Examining behaviour of arguments for question on Slack
var exploreArguments = function(){
  var args = Array.prototype.slice.call(arguments);

  console.log("arguments is an array:",Array.isArray(arguments));
  console.log("args is an array:",Array.isArray(args));
  console.log("args=",args);
  console.log("args.map()=",args.map(function(item){return item + 1;}));
  console.log("args.reduce()=",args.reduce(function(prev, curr){ return prev + curr;}));
};

// exploreArguments(1,2,3,4,5);

/**************************************************/

// Helper function for: Look and say numbers
var sayString = function(str) {

  var count = 0;
  var newStr = "";
  var compare = str[0];

  for(var i = 0; i < str.length; i++) {
      if(str[i] === compare) { 
        count++;

      } else { 
        newStr += count.toString() + compare.toString(); 
        compare = str[i];
        count = 1;
      }
  }
  newStr += count.toString() + compare.toString();
  return newStr;
};
// console.log(sayString("21"));

/**************************************************/

// String Mingling
var mingle = function(str1, str2) {
  return str1.length === 0 ? "" : str1[0] + str2[0] + mingle(str1.slice(1), str2.slice(1));
};

// console.log(mingle("HITESH","hitesh")); // HhIiTtEeSsHh

/**************************************************/

// String-o-Permute
// given an even length str, flip each pair of alphabet
var flipPairs = function(str, idx) {
  idx = idx || 0;
  return idx >= str.length  ? "" : str[idx + 1] + str[idx] + flipPairs(str, idx + 2);
};

// console.log(flipPairs("hiteshlala")); // ihethsalal

/**************************************************/
/*
// function from Laura Weaver
window.permutations = function(array) {
  var _permutations = function(soFar, choices) {
    if (choices.length === 0) {
      return [soFar]
    }
    var results = []
    for (var i = 0; i < choices.length; i++) {
      var choicesCopy = choices.slice()
      var soFarCopy = soFar.slice()
      soFarCopy.push(choices[i])
      choicesCopy.splice(i, 1)
      results = results.concat(_permutations(soFarCopy, choicesCopy))
    }
    return results
  }
  return _permutations([], array)
}
*/
/**************************************************/

// String Compression
var strCompress = function(str) {
  var result = "";
  var hold = str[0];
  var count = 0;
  for(var i = 0; i < str.length; i++){
    if(hold === str[i]) {
      count++;
    } else {
      count > 1 ? result += hold + count : result += hold;
      hold = str[i];
      count = 1;
    }
  }
  count > 1 ? result += hold + count : result += hold;

  return result;
};

// console.log(strCompress("abc"));
// console.log(strCompress("aaabaaaaccaaaaba")); //a3ba4c2a4ba

var strCompressRecur = function(str, count, letter, result) {
  count = count || 0;
  letter = letter || str[0];
  result = result || "";

  if(str.length === 0) {
    result += letter;
    if(count > 1) result += count;
    return result;
  }

  if(str[0] === letter) {
    count++;
    return strCompressRecur(str.slice(1), count, letter, result);
  } else {
    result += letter
    if(count > 1) result += count;
    letter = str[0];
    count = 1;
    return strCompressRecur(str.slice(1), count, letter, result); 
  }
};

// console.log(strCompressRecur("abc"));
// console.log(strCompressRecur("aaabaaaaccaaaaba")); //a3ba4c2a4ba

/**************************************************/

// Prefix Compression
//  recursive function - would be easier iteratively
var prefixCompress = function(str1, str2, result) {
  result = result || {pre:"", str1:"", str2:""};

  var formatResult = function(data) {
    var out = "";
    out += data.pre.length.toString() + " " + data.pre + "\n";
    out += data.str1.length.toString() + " " + data.str1 + "\n";
    out += data.str2.length.toString() + " " + data.str2;
    return out;
  };

  if(str1.length === 0 || str2.length === 0) {
    result.str1 = str1;
    result.str2 = str2;
    return formatResult(result);
  } else if(str1[0] === str2[0]) {
    result.pre += str1[0];
    return prefixCompress(str1.slice(1), str2.slice(1), result);
  } else {
    result.str1 = str1;
    result.str2 = str2;
    return formatResult(result);
  }
};

// console.log( prefixCompress("abcpqrpuppy","abcpqrdog"));

/**************************************************/

// String Reductions
//  recursive solution - also would be easier iteratively
var reduceString = function(str, result) {
  result = result || "";

  if(str.length === 0) {
    return result;
  
  } else if(result.indexOf(str[0]) > -1) {
    // do nothing
  
  } else {
    result += str[0];
  }

  return reduceString(str.slice(1), result);
};
// console.log(reduceString("Gurumayi is my lover"));


// iterative solution
var reduceStringIterative = function(str) {
  var result = "";
  var letters = {};

  for (var i = 0; i < str.length; i++) {
    if(letters[str[i]] === undefined) {
      result += str[i];
      letters[str[i]] = str[i];
    }
  }

  return result;
};

// console.log(reduceStringIterative("pprrqqHello world this is hitesh"));

/**************************************************/
// Filter Elements
//   Return the elements in an array that appears repeat times
//   Maintain the order of appearance of numbers
// Iterative version
var filterElements = function(repeat, numbers) {
  var count = {};
  var result = [];

  numbers.forEach(function(item, idx){
    if(!count[item]) {
      count[item] = [idx, 1, item];
    } else {
      count[item][1] += 1;
    }
  });

  for (var key in count) {
    if(count[key][1] >= repeat) {
      result.push(count[key]);
    }
  }

  result.sort();

  result = result.map(function(item){ return item[2];});

  return result.length > 0 ? result : -1;
};

// console.log(filterElements(4, [4, 5, 2, 5, 4, 3, 1, 3, 4]));
// console.log(filterElements(2, [5, 4, 3, 2, 1, 1, 2, 3, 4, 5]));

/**************************************************/

// Super Digit
var superDigit = function(num, repeat) {
  var sum = 0;
  while(num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  sum *= repeat;

  if(sum > 9) {
    return superDigit(sum, 1);
  } else {
    return sum;
  }
};

// console.log(superDigit(148, 3));

/**************************************************/
// Write a recursive function that computes and returns the sum of all elements
// in an array, where the array and its size are given as parameters.
var sumArray = function(ary, len) {
  return len === 0 ? 0 : ary[0] + sumArray(ary.slice(1), len-1);
};
// console.log(sumArray([1,2,3, 4],4));

/**************************************************/

var sortArray = function(ary) {
  for(var i = 0; i < ary.length - 1 ; i++) {
    var compare = ary[i];

    for(var j = i + 1; j < ary.length; j++) {
        if(compare > ary[j]) {
          var temp = ary[j];
          ary[j] = compare;
          ary[i] = temp;
          compare = ary[i];
        }
    }
  }
  return ary;
};

// console.log(sortArray([6,7,8,9,3,3,2,1]));
// console.log(sortArray([60,70,80,9,3,3,2,1]));

/**************************************************/

var deepEquals = function(apple, orange){
  // get keys.length of apple and orange
  // compare length them if not equal return false
  if( Object.keys(apple).length !== Object.keys(orange).length ) {
    return false;
  }
  
  // if apple === orange return true // checking to see if same object
  if ( apple === orange ) {
    return true;
  }
  
  if(!(apple instanceof Object) || !(orange instanceof Object)) {
    return false;
  }
  
  // if orrange === undefined return false
  if ( orange === undefined) {
    return false;
  }
  
  // for every key in apple call deepEqual(apple[key], orrange[key])
  for( var key in apple) {
     if( deepEquals(apple[key], orange[key]) === false) {
       return false;
     }
  }
  
  return true;
};

// console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})); // true
// console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); // false

/**************************************************/

var array = [12,5,36,8,9,10];

var findmin = function(arry) {
  if(arry.length === 0) {
    return Infinity;
  } else {
    var getnext = findmin(arry.slice(1));
    return arry[0] < getnext ? arry[0] : getnext;
  }
};

// console.log(findmin(array, 6));

/**************************************************/

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

// console.log(toRoman(1973)); // DCCXCVIII
// console.log(toRomanRecursive(2015));

/**************************************************/


