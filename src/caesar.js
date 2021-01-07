function caesar(input, shift, encode = true) {
    if (shift < -25 || shift > 25 || !shift || shift === 0 || !input) return false;
    const alphabet = 
          ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n','o','p', 'q', 'r', 's', 't','u', 'v', 'w', 'x', 'y', 'z'];
    
    let string = input.toLowerCase();
    let result = "";
    
    //loops through the cipher key and inputted string to begin decode or encode.
    for (let i = 0; i < string.length; i++){
      for(let j = 0; j < alphabet.length; j++){
        if (!alphabet.includes(string[i])) {
            result += string[i];
            break;
        }
        //Shifter, determines which way to shift and what letter to asign.
        if ( string[i] === alphabet[j]) {
        let shifter = j + shift
        if (!encode) shifter = j -shift
        
        //Ensures that if the shifter goes beyond the alphabet itll loop around.
        if (shifter < 0) {
            shifter += 26;
            result += alphabet[shifter];
        } else if (shifter > 25) {
            shifter -= 26;
            result += alphabet[shifter];
        } else result += alphabet[shifter];
    
        
      }  
      
    }
    
     
  }
  return result 
}

//console.log(caesar("z", 1, true));

module.exports = caesar;
