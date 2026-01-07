// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.
// Example:
// Input: "hello"
// Output: "olleh"


function reverseString(text) {
  const reversed = text.split("").reverse().join("");
  return reversed;
}

