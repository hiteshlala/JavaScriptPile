// Fibonacci Numbers
// this sequence starts 1, 1, 2, 3, 5
// so 0th element is 1, 1st element is 1, 2nd is 2

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
