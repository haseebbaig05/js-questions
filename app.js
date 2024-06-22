//Question 1: Write a function countCharacters that takes in a string and returns an object containing the count of each character in the string

function countCharacters(str) {
    const characterCounts = {};
    for (const char of str) {
        if (characterCounts[char]) {
            characterCounts[char]++;
        } else {
            characterCounts[char] = 1;
        }
    }
    return characterCounts;
}


const exampleString = "Haseeb Baig";
const result = countCharacters(exampleString);
console.log(result); 
//Output: { H: 1, a: 2, s: 1, e: 2, b: 1, ' ': 1, B: 1, i: 1, g: 1 }


// Question 2: Write a function fibonacci that takes an integer n as input and returns the n-th number in the Fibonacci sequence. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.

function fibonacci(h) {
    if (h < 0) {
        throw new Error("Input should be a non-negative integer.");
    }
    if (h === 0) return 0;
    if (h === 1) return 1;

    let a = 0;
    let b = 1;

    for (let i = 2; i <= h; i++) {
        const next = a + b;
        a = b;
        b = next;
    }

    return b;
}


const h       =   20;
const result1 =   fibonacci(h);
console.log    (result1); 
                     //Output: 6765


//Question 3: Write a function sortNumbers that takes an array of numbers as input and returns a new array with the numbers sorted in ascending order.

function sortNumbers(numbers) {
    const sortedNumbers    =    [...numbers];
    sortedNumbers.sort((a, b) => a - b);
    return sortedNumbers;
}

const numbers       =      [21, 25, 40, 100, 200];
const sorted        =       sortNumbers(numbers);
console.log(sorted); 
                // Output: [ 21, 25, 40, 100, 200 ]
