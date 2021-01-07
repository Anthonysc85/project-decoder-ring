function substitution(input, alphabet, encode = true) {
  
    const alphabetStr = 'abcdefghijklmnopqrstuvwxyz';
      
    if (!input || !alphabet) return false;
     
    const stringInput = input.toLowerCase();
    let result = '';
    
    if (alphabet.length !== 26) return false;
      
    const arrOfLetters = [];
    for (let letters in alphabet) {
      if (arrOfLetters .indexOf(alphabet[letters]) < 0) {
        arrOfLetters.push(alphabet[letters]);
      } 
      else {
        return false;
      }
    }
  
    for (let i = 0; i < stringInput.length; i++) {
      if (stringInput[i] === ' ') {
        result += ' ';
      } 
      else { 
        let index = alphabetStr
        let abc = alphabet;
  
        if (!encode) {
          index = alphabet;
          abc = alphabetStr;
        }
            
        for (let j = 0; j < index.length; j++) {
          if (stringInput[i] === index[j]) { 
            result += abc[j];
          }
        }
      }    
    }
      
    return result;
  }
  

module.exports = substitution;
