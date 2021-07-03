// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//#1
function highAndLow(numbers) {
  const arr = numbers.split(" "); //The numbers are split into an array
  let maxNum = arr[0];
  let minNum = arr[0];
  //We declare two variables to hold the highest and lowest value respectively

  for (let num of arr) {
    //We iterate through each num of the array
    if (Number(num) > maxNum) {
      maxNum = num;
      //If current number is greater than maxNum,it replaces it as the highest one.
    }

    if (Number(num) < minNum) {
      minNum = num;
      //If current number is less than maxNum,it replaces it as the lowest one.
    }
  }

  return maxNum + " " + minNum;

  //The result is returned with the highest and lowest numbers.
}

//#2
function highAndLow(numbers) {
  const arr = numbers
    .split(" ")
    .map((item) => Number(item))
    //We create an array by spliting the numbers, and the population a new one using MAP with our numbers as attributes.
    .sort((a, b) => b - a);
  //We sort them high to low substracting b - a
  return String(
    arr[0] + " " + String(arr[arr.length - 1])
    //We return a string of the first index of the array (Being the highest), and the last index of the array (Being the lowest.)
  );
}
