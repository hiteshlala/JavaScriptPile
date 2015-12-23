// Towers of Hannoi
 

//  Recursive solution that prints the solution to screen
var towerHanoi = function(disk, start, end, hold) {
  if(disk === 1) {
    console.log("Move disk %d from %s to %s", disk, start, end);
    // console.log(disk, start, end);
  } else {
    towerHanoi(disk-1, start, hold, end);
    console.log("Move disk %d from %s to %s", disk, start, end);
    // console.log(disk, start, end);
    towerHanoi(disk-1, hold, end, start);
  }
};
towerHanoi(5, "Start", "End", "Temp");

// Recursive solution that returns an array with instructions
var towerHanoiTable = function(numDisks) {
	var moves = [["Disk", "From", "To"]];
	var towerHanoi = function(disk, start, end, hold) {
	  if(disk === 1) {
	    moves.push([disk, start, end]);
	  } else {
	    towerHanoi(disk-1, start, hold, end);
	    moves.push([disk, start, end]);
	    towerHanoi(disk-1, hold, end, start);
	  }
	};

towerHanoi(numDisks, "Start", "End", "Temp");
return moves;
};

console.log(towerHanoiTable(4));


// formating the results in to a string table
var result = towerHanoiTable(4);
result = result.map(function(item){return item.join("\t\t\t");});
result = result.reduce(function(prev, curr){
	return prev + "\n" + curr;
});
console.log(result);