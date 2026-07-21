//Longest Word Finder
function findLongestWordLength(sentence) {
  const splitted_sentence = sentence.split(" ");
  let maxLength = 0;
  for (const word of splitted_sentence) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }
  return maxLength;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(findLongestWordLength("Googling do a barrel roll"));
