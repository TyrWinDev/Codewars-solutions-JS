const sequenceSum = (begin, end, step) => {
    var total = 0
    
    if(begin >= end) {
      return 0;
    }
    
    for (i = begin; i <= end; i += step){
      total += i
    }
    return total
  };