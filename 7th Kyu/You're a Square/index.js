var isSquare = function(n){
    let numchk;
    for(let i = 0; i < n + 1; i++) {
      numchk = n / i;
      if (i === numchk) {
        return true
      }
    }
    
    if(n < 0) {
      return false
    } else if (numchk == 1){
      return false
    } else {
      return true
    }
  }