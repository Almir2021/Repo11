

// Only change code below this line
function largestNumFromArr (arr) {
    var  maxNumArray = [];
    for (var i = 0; i< arr.length; i++) {
        var priMax = arr[i] [0];
        for (var j = 0; j< arr[i].length; j++) {
            var currentElement = arr [i][j];
            if (currentElement >=priMax) {
                priMax = currentElement;

            }

        }
        maxNumArray.push(priMax);
    }
    return maxNumArray;
}


// Only change code above this line
 console.log( largestNumFromArr([[13,27,18,26], [4,5,1, 3] , [32,35,37,39] , [1000,1001,857,1] ]))