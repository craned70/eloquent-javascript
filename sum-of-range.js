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