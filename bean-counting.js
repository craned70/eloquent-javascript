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

