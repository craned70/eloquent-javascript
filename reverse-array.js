/* For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same 
elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may 
use the standard reverse method. */

const reverseArray = function(arrayToBeReversed) {
    let newArray = [];
    for (element of arrayToBeReversed) {
        newArray.unshift(element);
    }
    return newArray;
};
