// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

// Example:

// Input: 5
// Output: 120

function findFactorial(number) {
  let count = 1;
  for (let i = 1; i < number; i++) {
    count += count * i;
  }
  console.log(count);
}

findFactorial(4);
