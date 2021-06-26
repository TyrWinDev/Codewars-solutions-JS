// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

// DNAStrand ("ATTGC") // return "TAACG"

// DNAStrand ("GTAT") // return "CATA" 

//#1
function DNAStrand(dna){
    const dictionary = { A: 'T', T: 'A', C: 'G', G: 'C' }; //We declare a variable with the symbol that complements each other
    return dna
      .split('') //We split the string into an array
     .map((c) => dictionary[c]) //We create a new array and populate it with the symbols added from our variable. 
      .join(''); //We join the array back into a string, with the symbols changed. 
      //EX. "ATTGC" => "TAACG"
 }

 //#2
 const DNAStrand = (dna) => {
  return dna
    .replace(/A/g, 't') //We replace globally the character for each.
    .replace(/T/g, 'a')
    .replace(/C/g, 'g')
    .replace(/G/g, 'c')
    .toUpperCase(); // We set them to uppercase. 

//#3
// #3
const DNAStrand = (dna) =>
  dna.replace(/./g, (c) => ({ A: 'T', T: 'A', G: 'C', C: 'G' }[c]));
  //We replace the characters withe their corresponding symbols