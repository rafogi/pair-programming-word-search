const transpose = function(matrix) {
// Put your solution here
  let newAr = [];
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[i].length; ++j) {
      if (matrix[i][j] === undefined) continue;
      if (newAr[j] === undefined) newAr[j] = [];
      // swap the x and y coords for the newAr
      newAr[j][i] = matrix[i][j];
    }
  }
  return newAr;
};


const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  let x = transpose(letters);
  const verticalJoin = x.map(a => a.join(''));
  for (let y of verticalJoin) {
    if (y.includes(word)) return true;
  }
  return false;
};



module.exports = wordSearch;