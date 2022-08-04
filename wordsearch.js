const transpose = (matrix) => {
  let result = [];
  let newArray = [];
  for (let j = 0; j < matrix.length; j++) {
    newArray = [];
    for (let i = 0; i < matrix[j].length; i++) {
      newArray.push(matrix[i][j]);
    }
    result.push(newArray);
  }
  return result;
};
const done = function(i, l, r) {
  if (r) return i !== 0;
  return i !== l;
};
const doneOne = function(i, l, r) {
  if (r) return i < l;
  return i >= 0;
};
const diagonalTranspose = (matrix, r) => {
  let result = [];
  let newArray = [];
  let j = 0;
  let ilen = 0;
  let jlen = 0;
  r ? ilen = matrix.length - 1 : null;
  let i = ilen;
  while (done(i, matrix.length - 1, r) || j !== matrix[0].length) {
    while (doneOne(i, matrix.length, r) && j < matrix[0].length) {
      newArray.push(matrix[i][j]);
      r ? i++ : i--;
      j++;
    }
    if (r) {
      ilen > 0 ? ilen-- : jlen++;
    } else {
      ilen < matrix.length - 1 ? ilen++ : jlen++;
    }
    result.push(newArray);
    newArray = [];
    i = ilen;
    j = jlen;
  }
  return result;
};


const search = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  const backwardsJoin = letters.map(ls => ls.reverse().join(''));
  for (let l of backwardsJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
};

const wordSearch = (letters, word) => {
  if (!letters || !word) return false;
  let diagonalLetters = diagonalTranspose(letters, true);
  if (search(diagonalLetters, word)) return true;
  let otherDiagonalLetters = diagonalTranspose(letters, false);
  if (search(otherDiagonalLetters, word)) return true;
  if (search(letters, word)) return true;
  let verticalLetters = transpose(letters);
  if (search(verticalLetters, word)) return true;
  return false;
};


module.exports = wordSearch;