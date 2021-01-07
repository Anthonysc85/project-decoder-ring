// Write your tests here!

const { expect } = require("chai");
const caesar = require("../src/caesar");


describe(('Caesar Shift'),() => {
    it(('Should return an encoded message'), () => {
        const expected = "wklqnixo";
        const actual = caesar("Thinkful", 3)
        expect(actual).to.eql(expected); 
    })
 
    it(('Should return a decoded message'), () => {
        const expected = "thinkful";
        const actual = caesar("wklqnixo", 3, false)
        expect(actual).to.eql(expected); 
    })
  
    it(('Should return false if input or shift value is missing'), () => {
        const expected = false;
        const actual = caesar("", )
        expect(actual).to.eql(expected); 
    })
  
    it(('Should return false if shift value is equal to 0'), () => {
        const expected = false;
        const actual = caesar("Thinkful", 0)
        expect(actual).to.eql(expected); 
    })
  
    it(('Should return false if shift value is equal to 25'), () => {
        const expected = false;
        const actual = caesar("Thinkful", 30)
        expect(actual).to.eql(expected); 
    })
  
    it(('Should return false if shift value is equal to 25'), () => {
        const expected = false;
        const actual = caesar("Thinkful", -30)
        expect(actual).to.eql(expected); 
    })
  
   it(('Capital letters can be ignored.'), () => {
        const expected = "wklqnixo";
        const actual = caesar("THINKFUL", 3)
        expect(actual).to.eql(expected); 
    })
  
    it(('Spaces, and other non-alphabetic symbols, should be maintained throughout'), () => {
        const expected = "Thinkful is cool!";
        const actual = caesar("pdejgbqh eo ykkh!", 4, false)
        expect(actual).to.eql(expected); 
    })
  
   
  
    it(('Letters shifted off the alphabet should wrap around'), () => {
        const expected = "a";
        const actual = caesar("z", 1)
        expect(actual).to.eql(expected); 
    })
})
