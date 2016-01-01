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