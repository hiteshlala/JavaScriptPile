// Basic function for creating permutations

function permuteArray(arr3){
    var sol = [];
    function permute(arr, arr2){
        arr2 = arr2 || [];
        //base case
        if(arr.length <= 1) {
            sol.push(arr2.concat(arr));
        }
    
        //recursive case
        else{
            for(var i = 0; i < arr.length; i++){
                var temp2 = arr2.concat([arr[i]]),
                    temp1 = arr.slice(0,i).concat(arr.slice(i+1));        
               permute(temp1, temp2);
            }
       }
    }
    
    permute(arr3);
    return sol;
}