// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.
// Example:
// Input: [1, 2, 3, 4]
// Output: 10

function sumOfNumbers(numbers) {
  const sum = numbers.reduce((acc, currentValue) => acc + currentValue, 0);
  return sum;
}
