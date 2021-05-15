function removeEveryOther(arr){
    //your code here
    return arr.filter((_, idx) => idx % 2 === 0);
  }