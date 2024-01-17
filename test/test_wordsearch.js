const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', '', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present across", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });
    
  it("should return true if the word is present downwards", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'E', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'D', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'I', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'JEDI');

    assert.isTrue(result);
  });

  it("should return true if the word is present backwards", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['D', 'R', 'A', 'W', 'K', 'C', 'A', 'B'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'BACKWARD');

    assert.isTrue(result);
  });
  
  it("should return true if the word is present upwards", function() {
    const result = wordSearch([
      ['A', 'W', 'A', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'A', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'P', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'R', 'U', 'W', 'K', 'C', 'A', 'B'],
      ['W', 'H', 'O', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'G', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'E', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'W', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'WEGOUP');

    assert.isTrue(result);
  });

  it("should return false if the word is blank",  function() {
    const result = wordSearch([
      ['A', 'W', 'A', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'A', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'P', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'R', 'U', 'W', 'K', 'C', 'A', 'B'],
      ['W', 'H', 'O', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'G', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'E', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'W', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], '');

    assert.isFalse(result);
  });
  
  it("should return false if the letters ar blank",  function() {
    const result = wordSearch([
      [],
      [],
      [],
      [],
      [],
      [],
      [],
    ], 'something');

    assert.isFalse(result);
  });
  
  it("should return false if the letters are completely blank",  function() {
    const result = wordSearch([
      [],
    ], 'something');

    assert.isFalse(result);
  });
  
  it("should return false if the letters are not an array",  function() {
    const result = wordSearch(1, 'something');
  
    assert.isFalse(result);
  });
  
  it("should return false if the letters not defined",  function() {
    const result = wordSearch(undefined, 'something');
  
    assert.isFalse(result);
  });
  
  it("should return false if the word is not defined",  function() {
    const result = wordSearch([
      ['A', 'W', 'A', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'A', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'P', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'R', 'U', 'W', 'K', 'C', 'A', 'B'],
      ['W', 'H', 'O', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'G', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'E', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'W', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], undefined);
  
    assert.isFalse(result);
  });
});
