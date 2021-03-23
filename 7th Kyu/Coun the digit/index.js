function nbDig(n, d) {
    var numberMatches = 0;
  
    for(var i = 0; i <= n; i++) {
      var squared = i*i;
      var squaredString = squared.toString();
      
      for(var k = 0; k<=squaredString.length; k++) {
        if(squaredString[k] === d.toString()) {
        numberMatches += 1;
        }
      } 
      
    }
    return numberMatches;
  }
  
  nbDig(5750, 0);