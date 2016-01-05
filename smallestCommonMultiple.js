/**
 * Smallest Common Multiple
 *
 * Find the smallest common multiple of the provided parameters that can 
 * be evenly divided by both, as well as by all sequential numbers in the
 * range between these parameters.
 *
 * The range will be an array of two numbers that will not necessarily be 
 * in numerical order.
 *
 * e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 
 * that is evenly divisible by all numbers between 1 and 3.
 */
// uses helper function isPrime()
function smallestCommons(arr) {
  // find the maximum number assign to max
  var max = Math.max.apply(Math, arr);
  // find the minimum number assign to min
  var min = Math.min.apply(Math, arr);

  var len = max - min;
  
  // create a result array first row will be prime factors
  var factors = [[1]];
  //  each row will be for the divisiblity of our numbers
  for(var i = 0; i <= len; i++) {
    //  first column will be the num itself
    factors.push([min]);
    min++;
  }
  
  // start factorizing from 2 and add a prime num each itertion
  var notFactored = true;
  var primeNum = 2;
  var count = 0;
  var secondTime = false;
  while(notFactored) {
    // find next prime factor
    while(!isPrime(primeNum)) {
      primeNum++;
    }
    
    // add primeNum to row 0
    factors[0].push(primeNum);

    // check each num for divisiblity  
    for(var i = 1; i <= len + 1; i++) {
      var idx = factors[i].length - 1;

      // if num % div === 0  write num / div in column
      if(factors[i][idx] % primeNum === 0) {
        var temp = factors[i][idx] / primeNum;
        factors[i].push( temp );
        // check to see if resulting num is still divisible by primeNum
        // and if change flag so we do not increment primeNum
        if(!secondTime && (temp % primeNum === 0)) secondTime = true;
      } else {
        // else write num
        factors[i].push(factors[i][idx]);
      }
    }

    // multiply the primes used to obtain this num 
    var product = 1;
    for(var j = 1; j < factors.length; j++) {
      product *= factors[j][factors[j].length - 1];
    }
    if(product === 1) {
      notFactored = false;
    }

    // check to see if primeNum can still divide into any num
    if(secondTime) { 
      secondTime = false;
    } else {
      primeNum++;
    }
  }

  // return that product of first row
  return factors[0].reduce(function(prev, curr) {
    return prev * curr;
  });

}
console.log(smallestCommons([1,13])); // 360360

// Helper functions

/**
 *  Is Prime
 *
 *  return true if num is prime, false otherwise
 *  assumes 1 is not prime that pesky debate is 
 *  still ongoing
 */
function isPrime(num) {
  if(num <= 1) return false;
  //else if(num === 1) return true;
  else if(num <= 3) return true;
  else if(num % 2 === 0 || num % 3 === 0) return false;
  else {
    for(var i = 5; i < num; i++) {
      if(num % i === 0) return false;
    }
  }
  return true;
}
// console.log(isPrime(5), isPrime(4));
