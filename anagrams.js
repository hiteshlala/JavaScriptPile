/**
 * find all anagrams of a string
 **/


function anagram(string) {
  var result = [];
  
  function recurse(sub, anag) {
    anag = anag || "";
    
    if(sub.length === 0) {
      result.push(anag);
      
    } else {
      for(var i = 0; i < sub.length; i++) {
        var temp = sub.slice(0,i) + sub.slice(i+1);
        recurse(temp, anag + sub[i]);
      }
    }
  }
  
  recurse(string);
  
  return result;
}

function anagram2(string, result, anag) {
  result = result || [];
  anag = anag || "";
  if(string.length === 0) {
    result.push(anag);
  } else {
    for(var i = 0; i < string.length; i++) {
      var temp = string.slice(0,i) + string.slice(i+1);
      anagram2(temp, result, anag + string[i]);
    }
  }
  return result;
}

