const transpose = function(matrix) {
  let returnMatrix = [];
  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < matrix[0].length; columnIndex++) {
      if (returnMatrix[columnIndex] === undefined) {
        returnMatrix[columnIndex] = [];
      }
      returnMatrix[columnIndex][rowIndex] = matrix[rowIndex][columnIndex];
    }
  }
  return returnMatrix;
};

const reverseLetters = function(matrix) {
  let returnMatrix = [];
  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < matrix[0].length; columnIndex++) {
      let newRowIndex = (returnMatrix.length) - rowIndex;
      let newColumnIndex = (returnMatrix.length) - columnIndex;
      if (returnMatrix[newRowIndex] === undefined) {
        returnMatrix[newRowIndex] = [];
      }
      returnMatrix[newRowIndex][newColumnIndex] = matrix[rowIndex][columnIndex];
    }
  }
  return returnMatrix;
};

const checkForWordHorizontalForwards = function(letters, word) {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      console.log('returning true');
      return true;
    }
  }
  return false;
};

const isWordInvalid = function(word) {
  return ((!word) || (word.length === 0));
};

const areLettersInvalid = function(letters) {
  return  ((!letters) ||
           (!Array.isArray(letters)) ||
           (letters.length === 0) ||
           (!Array.isArray(letters[0])) ||
           (letters[0].length === 0));
};

const wordSearch = (letters, word) => {
  if ((isWordInvalid(word)) || (areLettersInvalid(letters))) {
    return false;
  }
  const foundHorizontal = checkForWordHorizontalForwards(letters, word);
  const foundVertical = checkForWordHorizontalForwards(transpose(letters), word);
  const reversedLetters = reverseLetters(letters);
  const foundHorizontalBackwards = checkForWordHorizontalForwards(reversedLetters, word);
  const foundVerticalBackwards = checkForWordHorizontalForwards(transpose(reversedLetters), word);

  const found = foundHorizontal || foundVertical || foundHorizontalBackwards || foundVerticalBackwards;
  return found;
};

module.exports = wordSearch;