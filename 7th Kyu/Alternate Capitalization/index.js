function capitalize(s){
    let firstString = ''
    let altString = ''
    
    for (let i = 0 ; i < s.length; i++) {
      if(i % 2 === 0) {
        firstString += s[i].toUpperCase()
      } else {
        firstString += s[i]
      }
    }
    
    for(let i = 0; i < s.length; i++) {
      if ( i % 2 === 1) {
        altString += s[i].toUpperCase()
      } else {
        altString += s[i]
      }
    }
    return [firstString, altString]
  };