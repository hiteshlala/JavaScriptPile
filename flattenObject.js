// Flatten Nested Map
//  from codewars.com

// some sample data
var testObj = {
  a:"a",
  b:"b",
  c: {
    d:"d",
    e:{
      f:"f",
      g:"g",
    },
    h:"h",
  },
  i:"i",
};

var testObj2 = {
  'a': {
    'b': {
      'c': 12,
      'd': 'Hello World'
    },
    'e': [1,2,3]
  }
};

// helper function
var extend = function(obj1, obj2) {
  for(var key in obj2) obj1[key] = obj2[key];
  return obj1;
}

var flattenObj = function(obj, parent, result) {
  parent = parent || "";
  parent = parent === "" ? "" : parent + "/";
  result = result || {};
  
  for(var key in obj) {
    if(typeof(obj[key]) === "object" &&
        !(Array.isArray(obj[key])) &&
        obj[key] !== null) {
      
      extend(result, flattenObj(obj[key], parent + key, result));
      
    } else {
      result[parent + key ] = obj[key];
    }
  }
  return result;
}

console.log(flattenObj(testObj));
console.log(flattenObj(testObj2));