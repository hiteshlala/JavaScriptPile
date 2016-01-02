/**
 *  Binary Search
 *
 *  Given an ordered list and an item return the index of the item in that list. 
 *  You should do this recursively by continually splitting the list in half 
 *  and doing a comparative check on the given item and the item at the index 
 *  that you have split the array to.
 *  
 *  It is possible to take greater advantage of the ordered list if we are clever 
 *  with our comparisons. In the sequential search, when we compare against the first item, 
 *  there are at most n−1 more items to look through if the first item is not what 
 *  we are looking for. Instead of searching the list in sequence, a binary search will 
 *  start by examining the middle item. If that item is the one we are searching for, 
 *  we are done. If it is not the correct item, we can use the ordered nature of the 
 *  list to eliminate half of the remaining items. If the item we are searching for is 
 *  greater than the middle item, we know that the entire lower half of the list as well 
 *  as the middle item can be eliminated from further consideration. The item, if it is in 
 *  the list, must be in the upper half.
 *
 *  We can then repeat the process with the upper half. Start at the middle item 
 *  and compare it against what we are looking for. Again, we either find it or split 
 *  the list in half, therefore eliminating another large part of our possible search 
 *  space.
 *  
 */

var binarySearch = function(ary, target) {
  var left = 0;
  var right = ary.length - 1;

  var recurse = function(left, right) {
    if(left <= right) {
      var mid = Math.floor( (left + right) / 2 );
      if(ary[mid] === target) {
        return mid;
      } else if(target < ary[mid]) {
        right = mid - 1;
        return recurse(left, right);
      } else {
        left = mid + 1;
        return recurse(left, right);
      }
    }
  };

  var index = recurse(left, right);

  return index === undefined ?  "not found" : index;
};

// var anarray = [1,2,3,4,5,6,7,8,9];
// console.log(anarray);
// for(var i = 1; i < 12; i++) {
//   console.log("expected=",i-1,"calculated=", binarySearch(anarray, i));
// }
