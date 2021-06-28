// Jaden Casing Strings

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013).
// Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter,
// he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word,
// check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith.
// The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// Link to Jaden's former Twitter account @officialjaden via archive.org

//#1
String.prototype.toJadenCase = function () {
  let jCased = []; //Create an array to hold the string
  let words = this.toLowerCase().split(" "); //Turns the entire string to lowercase, and splits it into an array
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    //Iterates through each index of the array
    jCased.push(word[0].toUpperCase() + word.slice(1));
    //Takes the first index of the array, turns it to uppercase and its sliced from the array.
  }
  return jCased.join(" ");
  //The array is joined into a string with the index 0 of every array to UpperCase.
};

//testing code below
var str = "How can mirrors be real if our eyes aren't real";
Test.assertEquals(
  str.toJadenCase(),
  "How Can Mirrors Be Real If Our Eyes Aren't Real"
);

//#2
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map(function (word) {
      //Populates a new array with words from the string
      return word.charAt(0).toUpperCase() + word.slice(1);
      //Takes the first character of the array, turns it to uppercase and its sliced from the array.
    })
    .join(" ");
  //The array is joined into a string with the index 0 of every array to UpperCase.
};
