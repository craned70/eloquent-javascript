/*The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.*/
const min = function(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  };
/*We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.*/
const isEven = function(n) {
    if (n == 0) {
        return true;
    } else if (n == 1) {
        return false;
    } else {
        return isEven(n - 2);
    }
};
/*Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.*/
const countBs = function(string) {
    let numberOfBs = 0;
    for (let i = 0; i <= string.length; i++) {
        if (string[i] == "B") {
            numberOfBs++;
        }
    }
    return numberOfBs;
};

const countChar = function(string, char) {
    let numberOfChars = 0;
    for (let i = 0; i <= string.length; i++) {
        if (string[i] == char) {
            numberOfChars++;
        }
    }
    return numberOfChars;
};