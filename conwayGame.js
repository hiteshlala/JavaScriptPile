// single iteration of Conways Game of Life
// requires genEmptyCells()
// 1 === alive 0 === dead
// Any live cell with fewer than two live neighbours dies, as if caused by under-population.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overcrowding.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

function nextGen(cells){
    var m = cells.length;
    if(m > 0) {
        var n = cells[0].length;    
    }
    var next = genEmptyCells(m, n);

    for(var i = 0; i < m; i++) {        
        for(var j = 0; j < n; j++) {
            var count = 0;
            // will be eight checks
            // i-1
            if(i - 1 >= 0) {
                //  j-1
                if(j - 1 >= 0) {
                    if(cells[i - 1][j - 1] === 1) {
                        count++;
                    }
                }
                //  j
                if(cells[i - 1][j] === 1) {
                    count++;
                }
                //  j+1
                if(j + 1 < n) {
                    if(cells[i - 1][j + 1] === 1) {
                        count++;
                    }
                }
            }//if(i-1>=0)
            // i
            //  j-1
            if(j - 1 >= 0) {
                if(cells[i][j - 1] === 1) {
                    count++;
                }
            }
            //  j+1
            if(j + 1 < n) {
                if(cells[i][j + 1] === 1) {
                    count++;
                }
            }
            // i+1
            if(i + 1 < m) {
                //  j-1
                if(j - 1 >= 0) {
                    if(cells[i + 1][j - 1] === 1) {
                        count++;
                    }
                }
                //  j
                if(cells[i + 1][j] === 1) {
                    count++;
                }
                //  j+1
                if(j + 1 < n) {
                    if(cells[i + 1][j + 1] === 1) {
                        count++;
                    }
                }
            }//if(i+1<m)

            if((count === 3) ) {
                next[i][j] = 1;
            } else if(count === 2 && cells[i][j] === 1) {
                next[i][j] = 1;
            } else {
                next[i][j] = 0;
            }
        }//for(j)
    }//for(i)

    return next;
}


// generates a m by n matrix with 0 as entries unless
// r === true then it assigns 0 or 1 randomly
function genEmptyCells(m, n, r) {
    if(r) {
        state = function() {
            return Math.random() > 0.5 ? 1 : 0;
        };
    } else {
        state = function() { return 0; };
    }

    var cells = [];
    
    for(var i = 0; i < m; i++) {
        cells.push([]);
        for(var j = 0; j < n; j++) {

            cells[i].push(state());
        }
    }
    return cells;
}

function nextGen2(cells){
    var m = cells.length;
    var n = m > 0 ? n = cells[0].length : 0;
    
    var next = genEmptyCells(m, n);
    var getValue = function(matrix, i, j) {
        return matrix[i] && matrix[i][j] || 0;
    };


    for(var i = 0; i < m; i++) {        
        for(var j = 0; j < n; j++) {
            var count = 0;
            // check eight neighbors
            var count = getValue(cells, i-1, j-1) +
                getValue(cells, i-1, j) +
                getValue(cells, i-1, j+1) + 
                getValue(cells, i, j-1) +
                getValue(cells, i, j+1) +
                getValue(cells, i+1, j-1) +
                getValue(cells, i+1, j) +
                getValue(cells, i+1, j+1);

            if((count === 3) ) {
                next[i][j] = 1;
            } else if(count === 2 && cells[i][j] === 1) {
                next[i][j] = 1;
            } else {
                next[i][j] = 0;
            }
        }//for(j)
    }//for(i)

    return next;
}

var inmatrix = genEmptyCells(7, 7, true);
var result = nextGen(inmatrix);
result.forEach(function(item, i){
    console.log(i,item );
});
var result = nextGen2(inmatrix);
result.forEach(function(item, i){
    console.log(i,item );
});


// var inmatrix = genEmptyCells(3,4,true); 
// console.log(nextGen([[]]));