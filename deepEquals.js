/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
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
  // else return true
  return true;
};

console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})); // true
console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); // false