//Functions and Fractals - Recursive Trees
var recurseTree = function(iterations, height) {
  height = height || 16;

  // these are the characters for image
  //  o - open area, l - line part
  var o = " ";
  var l = "*";

  // generates an upside down Y of 
  // height = 2 * height 
  // width = 2 * height + 1
  var drawY = function(height){
    var image = [];
    
    // constructin the I part
    for(var i = 0; i < height; i++) {
      image.push([]);
      for(var j = 0; j < height; j++) {
        image[i].push(o);
      }
      image[i].push(l);
      for(var j = 0; j < height; j++) {
        image[i].push(o);
      }
    }

    // constructing the v part
    for(var i = height; i < height * 2; i++) {
      image.push([]);
      for(var j = 0; j < height * 2 - 1; j++) {
        if(j === height * 2 - i - 1 ) image[i].push(l);
        if(j === i ) image[i].push(l);
        image[i].push(o);
      }
    }
    // this line to catch a wierd edge effect
    image[height * 2 - 1].push(l);

    return image;
  };

  var drawSubY =  function(height, iter) {

    if(iter === 0) {
      // base case
      return drawY(height);
    } else {
      // recursive case
      var smallY = drawSubY(height/2, iter - 1);
      var bigY = drawY(height);
    }

    var image = [];
    var newHeight = smallY.length + bigY.length;
    var newWidth = bigY[0].length + Math.floor(smallY[0].length / 2) * 2;

    var bigYi = 0;
    var bigYj = 0;
    
    var smallYi = 0;
    var samllYj1 = 0;
    var smallYj2 = 0;

    // are edge indices for large and small Y's
    var edge1 = Math.floor(smallY[0].length / 2);
    var edge2 = newWidth - edge1;
    var edge3 = smallY[0].length;
    var edge4 = newWidth - smallY[0].length;

    
    for(var i = 0; i < newHeight; i++) {
      image.push([]);
      bigYj = 0;
      smallYj2 = 0;
      smallYj1 =0;
      for(var j = 0; j < newWidth; j++) {

        // add large Y
        if(i < height * 2) {

          if( j < edge1 || j >= edge2) {            
            image[i].push(o);
         
          } else {
            image[i].push(bigY[bigYi][bigYj]);
            bigYj++;
          }

        // add two little Y's
        } else {
          if(j >= edge4 ) { 
            image[i].push(smallY[smallYi][smallYj1]);
            smallYj1++;

          } else if ( j < edge3 ) {
            image[i].push(smallY[smallYi][smallYj2]);
            smallYj2++;

          } else {
            image[i].push(o);
          }
        }
      } // for j

      bigYi++;
      if(i >= height * 2 ) smallYi++;
    } // for i

    return image;
  };

  var image = drawSubY(height, iterations);

  // convert image data from an array to a string
  var assembleImage = function(image) {
    // first invert image data
    image.reverse();
    // join line arrays
    image = image.map(function(item) {
      return item.join("");
    });
    // join lines and return
    return image.join("\n");
  };

  return assembleImage( image );
};

console.log(recurseTree(3,8));
