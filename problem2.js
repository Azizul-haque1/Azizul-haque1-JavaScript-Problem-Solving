// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.
// Example:
// Input: "programming"
// Output: 3

function vowelsCounter(text) {
  const vowels = ["a", "e", "i", "o", "u"];
  const convertedText = text.toLowerCase();
  const letters = convertedText.split("");
  let countVowel = 0;
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (letters[i] === vowels[j]) {
        countVowel += 1;
      }
    }
  }
  return countVowel;
}
