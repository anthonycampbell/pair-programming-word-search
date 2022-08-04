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
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present and horizontal", function() {
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
  it("should return true if the word is present and vertical", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'R', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'A', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'N', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'K', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isTrue(result);
  });
  it("should return false if matrix is empty", function() {
    const result = wordSearch([], false);
    assert.isTrue(result === false);
  });

  it("should return false if matrix is undefined", function() {
    const result = wordSearch(undefined, false);
    assert.isTrue(result === false);
  });
  it("should return false if word is undefined", function() {
    let matrix = [
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ];
    const result = wordSearch(matrix, "");
    assert.isTrue(result === false);
  });
  it("should return true if word is backwards", function() {
    let matrix = [
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'Y', 'N', 'O', 'H', 'T', 'N', 'A'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ];
    const result = wordSearch(matrix, "ANTHONY");
    assert.isTrue(result);
  });
  it("should return true if word is diagonal", function() {
    let matrix = [
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'Y', 'N', 'O', 'H', 'T', 'N', 'A'],
      ['B', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'L', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'A', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'K', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'E', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ];
    const result = wordSearch(matrix, "QUAB");
    assert.isTrue(result);
  });
  it("should return true if word is on the other diagonal", function() {
    let matrix = [
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'Y', 'N', 'O', 'H', 'T', 'N', 'A'],
      ['B', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'L', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'A', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'K', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'E', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ];
    const result = wordSearch(matrix, "BLAKE");
    assert.isTrue(result);
  });
  it("should return true if word is diagonal backwards", function() {
    let matrix = [
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['N', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'O', 'N', 'O', 'H', 'T', 'N', 'A'],
      ['B', 'M', 'I', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'L', 'C', 'T', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'A', 'E', 'S', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'K', 'A', 'E', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'E', 'U', 'U', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'Q'],
    ];
    const result = wordSearch(matrix, "QUESTION");
    assert.isTrue(result);
  });
  it("should return true if word is on the other diagonal", function() {
    let matrix = [
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'Y', 'N', 'O', 'H', 'T', 'S', 'A'],
      ['B', 'M', 'J', 'T', 'E', 'T', 'R', 'G'],
      ['W', 'L', 'C', 'S', 'R', 'E', 'R', 'L'],
      ['B', 'F', 'A', 'I', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'U', 'K', 'A', 'P', 'A', 'I'],
      ['O', 'Q', 'C', 'A', 'E', 'U', 'A', 'S'],
      ['S', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ];
    const result = wordSearch(matrix, "SQUIRTS");
    assert.isTrue(result);
  });
});
