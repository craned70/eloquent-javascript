// write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
const myRange = function(start, end) {
    let theRange = [];
    for (let i = start; i <= end; i++) {
        theRange.push(i);
    }
    return theRange;
};
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
const mySum = function(numArray) {
    let sum = 0;
    for (number of numArray) {
        sum += number;
    }
    return sum;
};
console.log(myRange(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(mySum(myRange(1, 10)));
// → 55

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

const reverseArrayInPlace = function(arrayToBeReversed) {
    for (i = 0; i < arrayToBeReversed.length / 2; i++) {
        let backNumber = arrayToBeReversed[arrayToBeReversed.length - 1 - i];
        let frontNumber = arrayToBeReversed[i];
        arrayToBeReversed[i] = backNumber;
        arrayToBeReversed[arrayToBeReversed.length - 1 - i] = frontNumber;
    }
    return arrayToBeReversed;
};

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));

/*
Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.
*/

const arrayToList = function(array) {
    let list = null;
    for (let element = array.length - 1; element >= 0; element--) {
        list = {value: array[element], rest: list};
    }
    return list;
};

const listToArray = function(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
};
  
const prepend = function(value, list) {
    return {value, rest: list};
};
  
const nth = (list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
};
  
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

const deepEqual = function(a, b) {
    if (a === b) return true;
    
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
  
    let keysA = Object.keys(a), keysB = Object.keys(b);
  
    if (keysA.length != keysB.length) return false;
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
  
    return true;
  }


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

