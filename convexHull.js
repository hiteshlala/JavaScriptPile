
// Convex Hull
//  This was supposed to be a recursive solution but I implemented an
//  iterative soultion, not sure yet how to implement it recursively.
//  
// Graham's scan method

// return the distance between two points, points are in the from [x, y]
var distance = function(point1, point2) {
  return Math.sqrt(Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2));
};
// console.log(distance([0,0], [1,1]));


// recieves points in an array of arrays [[x,y],,,,]
// returns the sum from point0 to point1 plus .... pointLast to point0
// adds in order that appear in array 
var convexHullPerimiter = function(points) {
  var perimiter = 0;
  var len = points.length;
  for (var i = 0; i < len; i++) {
    perimiter += distance(points[i % len ], points[(i+1) % len]);
  }
  return perimiter;
};
// console.log(convexHullPerimiter([[0,0],[1,0],[1,1],[0,1]]));


// calculate the dot product of two vectors
var dotProd = function(vect1, vect2) {
  return vect1[0] * vect2[0] + vect1[1] * vect2[1];
};
// console.log(dotProd([5,-8], [1,2]));


// calculate the magnitude of a vector
var magVect = function(vect) {
  return Math.sqrt(vect[0] * vect[0] + vect[1] * vect[1]);
};
// console.log(magVect([1,1]));  


// make a vector given two points
var makeVect = function(start, end){
  return [end[0] - start[0], end[1] - start[1]];
};
// console.log(makeVect([0,0], [1,0]));


// traverse points in an anticlock wise direction
//   to determine the edge points
var convexHull = function(points) {
  // sort first by smallest y and by smallest x if there
  //  are points with equal y's
  points.sort(function(point1, point2){
    if(point1[1] === point2[1]) {
      return point1[0]-point2[0];
    } else {
      return point1[1] - point2[1];
    }
  });

  var xvector = [1,0];
  var start = points[0];
  var remaining = points.slice(1);

  // sort remaining points by the angle that point and 
  //   start point line makes with x axis
  remaining.sort(function(point1, point2){
    var vect1 = makeVect(start, point1);
    var vect2 = makeVect(start, point2);

    var cosTheta1 = dotProd([1,0], vect1) / magVect(vect1);
    var cosTheta2 = dotProd([1,0], vect2) / magVect(vect2);

    return cosTheta2 - cosTheta1;
  });

  // in an anti clockwise direction start examining the turns, 
  //   left or right if is a right, remove previous point
  //   using a cross product to determine the turns simplified
  //   to using just the point co-ordinates
  var boundary = [];
  boundary.push(start);
  boundary.push( remaining.shift() );
  for (var i = 0; i < remaining.length ; i++) {
    var p1 = boundary[boundary.length - 2];
    var p2 = boundary[boundary.length - 1];
    var p3 = remaining[i];

    var direction = (p2[0] - p1[0]) * (p3[1] - p2[1]) - 
                    (p3[0] - p2[0]) * (p2[1] - p1[1]);

    if(direction >= 0) {
      boundary.push( remaining[i]);
    }
    else {
      boundary.pop();
      boundary.push(remaining[i]);
    }

  }

  var perimiter = convexHullPerimiter(boundary);

  return { points:points, boundary:boundary, perimiter:perimiter};
};


var points = [[1,1],[2,5],[3,3],[5,3],[3,2],[2,2]]; // perimiter 12.2
var points2 = [[1,3],[1,1],[2,5],[3,-3],[5,3],[1,-3],[3,2],[2,2]];

console.log(convexHull(points));
