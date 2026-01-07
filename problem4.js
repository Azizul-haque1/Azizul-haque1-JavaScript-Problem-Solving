// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.
// Example:
// Input: [5, 1, 9, 3]
// Output: 9

function getMaximumNumber(arr) {
  let largestNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}
