// want to make a list of all possible text strings for a tel number

var numMap = {
    0:["0"],
    1:["1"],
    2:["a","b","c"],
    3:["d","e","f"],
    4:["g","h","i"],
    5:["j","k","l"],
    6:["m","n","o"],
    7:["p","q","r","s"],
    8:["t","u","v"],
    9:["w","x","y","z"]
};
console.log(3*3*3*3*3*4*3*4);
function numToSent(num){
    var strAry = [],
        digit=[],
        temp;
    
    // split num into digits
    while(num >0){
        temp = num%10;
        digit.unshift(temp);
        num = (num - temp) / 10;
    }
    //console.log(digit);
    
    // take each array in arrOut and add each item in select to it
    function iterate(select, arrOut){
        var newOut = [];
        if(arrOut.length === 0){
            for(var i = 0; i < select.length; i++){
                newOut.push([select[i]]);
            }
            return newOut;
        }
        else{                
            for(var i = 0; i < arrOut.length; i++){
                for(var j = 0; j < select.length; j++){
                    newOut.push(arrOut[i].concat([select[j]]));
                }    
            }
            return newOut;
        }
    }
    
    //console.log(iterate(numMap[5],strAry));
    
    var out = digit.reduce(function(prev, curr){
         return iterate(numMap[curr],prev);
        
    },[]);
    
    //console.log(out);
    
    out.forEach(function(val){
       console.log( val.reduce(function(prev, curr){ return String(prev) + String(curr);},""));
    
    });
    //return out;


}

//5106583911

//console.log(numMap[2][1]);
//console.log(numToSent(5106583911));
console.log(numToSent(5103262974));

console.log("potential num strings =", Math.pow(4,10) );
