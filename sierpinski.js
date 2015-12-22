// Functions and Fractals: Sierpinski triangles
// generates sierpinski triangle with n iterations and 
//   original hight h
function sierpinski(n, h) {
  
  // this generates an array containing a triangle
  //  that has hight h and width = (h * 2 - 1)
  function drawTriangle(h) {
    var image = [];
    var width = h * 2 - 1;
    for (var i = 0; i < h; i++) {
      image[i] = [];
      var edgeIdx = (width - 1) / 2;

      for (var j = 0; j < width; j++) {
        if(j < edgeIdx - i || j > edgeIdx + i ) image[i].push(" ");
        else image[i].push("*");
      }
    }
    return image;
  }

  
  // this is the recursive function and generates sub triangles
  function drawSubTriangles(h, n) {
    var smallTriangle = n === 0 ? drawTriangle(h/2): drawSubTriangles(h/2, n - 1);

    var image = [];
    var width = h * 2 - 1;

    // add top triangle
    for (var i = 0; i < h/2; i++) {
      image.push([]);
      
      for (var j = 0; j < width / 4; j++) {
        image[i].push(" ");
      }

      image[i] = image[i].concat(smallTriangle[i]);
      
      for (var j = 0; j < width / 4; j++) {
        image[i].push(" ");
      }
    }

    //add bottom two triangles
    for (var i = h/2, j = 0; i < h; i++, j++) {
      image.push([]);
      image[i] = image[i].concat(smallTriangle[j]);
      image[i].push(" ");
      image[i] = image[i].concat(smallTriangle[j]);
    }

    return image;
  }

  var image = n === 0 ? drawTriangle(h) : drawSubTriangles(h, n-1);

  // convert image data into a string
  function sendImgStr(ary) {
    var imgStr = "";
    for (var i = 0; i < ary.length; i++) {
       imgStr += ary[i].join("");
       imgStr += "\n";
     }
     return imgStr;
  }
  
  return sendImgStr(image);
}
console.log(sierpinski(0, 32));
console.log(sierpinski(1, 32));
console.log(sierpinski(2, 32));
console.log(sierpinski(3, 32));

