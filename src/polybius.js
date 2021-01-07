function polybius(input, encode = true) {

    const alphabet = [
        { 'a' : 11 }, { 'b' : 21 }, { 'c' : 31 }, { 'd' : 41 }, { 'e' : 51 },
        { 'f' : 12 }, { 'g' : 22 }, { 'h' : 32 }, { 'i' : 42 }, { 'j' : 42 }, { 'k' : 52 },
        { 'l' : 13 }, { 'm' : 23 }, { 'n' : 33 }, { 'o' : 43 }, { 'p' : 53 },
        { 'q' : 14 }, { 'r' : 24 }, { 's' : 34 }, { 't' : 44 }, { 'u' : 54 },
        { 'v' : 15 }, { 'w' : 25 }, { 'x' : 35 }, { 'y' : 45 }, { 'z' : 55 }];

    if (!input) { return false; }
    
     
      const string = input.toLowerCase();
      let result = '';   
        
      
      if (encode) {
        for (let i = 0; i < string.length; i++) {         
          let char = string[i];
          if (char === 'i' || char === 'j') {
            result = result + alphabet['i'];
          } 
          else if (char === ' ') {
            result += ' ';
          } 
          else {
            let matches = Object.entries(alphabet).find((letter) => char === letter[0]);
            result += matches[1];
          }
        }
      } 
      else {
        let count = 0;
        for (let i = 0; i < input.length; i++) {
          if (input[i] !== ' ') count++;
        }
        if (count % 2 !== 0) {
          return false;
        }
    
        for (let i = 0; i < input.length; i = i + 2) {
          let decoded = `${input[i]}${input[i+1]}`;
          if (decoded.includes(' ')) {
            result = result + ' ';
            i = i-1;
          } 
          else if (decoded === '42') { //42 = i & j
            result = result + '(i/j)';
          } 
          else {
            let charIsEql = Object.entries(alphabet).find((letter) => decoded === letter[1]);
            if (charIsEql) result = result + charIsEql[0];
          }
        }
      }
        
      return result;
 

    
  }
  

module.exports = polybius;
