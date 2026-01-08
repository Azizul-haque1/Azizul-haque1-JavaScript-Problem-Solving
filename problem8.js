// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.
// Example:
// Input: "hello world"
// Output: "Hello World"

function capitalizeFirstLetter(sentence) {
  const words = sentence.split(" ");
  const updateWords = [];
  for (let i = 0; i < words.length; i++) {
    let letters = words[i].split("");
    const firstLetter = letters[0].toUpperCase();
    let word = firstLetter + "";
    for (let j = 1; j < letters.length; j++) {
      word += letters[j];
    }
    updateWords.push(word);
  }

  const capitalizes = updateWords.join(" ");

  return capitalizes;
}
