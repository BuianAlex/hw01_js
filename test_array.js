const test = function(array) {
    if ( !Array.isArray(array) || array.length === 0){
        return false;        
    }
    let max;
    let min;
    let sum;
    for ( let index = 0; index < array.length; index++ ) {
        if ( !isNaN(array[index]) ){
            if ( max === undefined && min === undefined && sum === undefined  ) {
                max = array[index];
                min = array[index];
                sum = array[index];
            }
            else {
                if ( max < array[index] ) {
                    max = array[index];
                }
                if ( min > array[index] ) {
                    min = array[index];
                }
                sum += array[index]               
            }  
         }
          
    }
    if ( max !== undefined && min !== undefined && sum !== undefined  ){
            return {max: max, min: min, sum:sum};
    }   
    return false;   
}


module.exports = {test};

