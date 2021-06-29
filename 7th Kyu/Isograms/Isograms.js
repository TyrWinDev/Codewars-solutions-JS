// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram(str) {
  str = str.toLowerCase(); //We turn the string to lowercase to avoid case issues
  str = str.split(""); //We split it into array
  str = str.sort(); // Sort the newly created array
  for (var i = 0; i < str.length; i++) {
    //We iterate through the array
    if (str[i] === str[i + 1]) {
      //We check for the existance of every character, and if its more than one
      return false;
      //we return false
    }
  }
  return true;
  //If its the only character in the array, we retunr true.
}
