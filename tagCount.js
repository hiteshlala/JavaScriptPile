/**
 *  Tag Count
 *   Write a function that recursively checks all tags of the document and 
 *   counts the number of times a given tag appears. The tag and DOM to be 
 *   checked are inputs.
 */

var tagCount = function(givenDOM, tagName) {
  var count = 0;

  if(givenDOM.nodeName === tagName.toUpperCase()) {
    count++;
  }
  if( givenDOM.childNodes.length > 0) {
    var nodeAry = givenDOM.childNodes;
    for(var i = 0; i < nodeAry.length; i++) {
      count += tagCount(nodeAry[i], tagName, count);
    }
  }

  return count;
};
