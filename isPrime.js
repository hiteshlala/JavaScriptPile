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
