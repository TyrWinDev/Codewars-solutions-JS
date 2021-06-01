// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
  let array = "";

  //   let re = /x[i]/gi;

  for (i = 0; i < x.length; i++) {
    if (x[i] < "5") {
      array += "0";
      //       array.replace(re, '0')
    } else if (x[i] >= "5") {
      array += "1";
      //     array.replace(re, '1')
    }
  }

  console.log(x);
  console.log(array);
  return array;
  //   return x;
}
