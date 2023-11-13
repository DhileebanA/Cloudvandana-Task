// Given array.
var array = [5,4,6,7,2,1];
// For output.
console.log(descendingArray(array))

// User defined method for descending the array.
function descendingArray(array){

    // Loop to iterate the array individually.
    for (let i = 0; i < array.length; i++) {

        // Iterate through the elements in a loop and assigning the highest value to the previous element for each iteration.
        for (let j = i+1; j < array.length; j++) {
            if (array[j] > array[i]){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}