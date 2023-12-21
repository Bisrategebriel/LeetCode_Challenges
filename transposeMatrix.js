/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

var transpose = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length; //a matrix has equal length in its column

  let transposedMatrix = new Array(cols)
    .fill(0)
    .map(() => new Array(rows).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      transposedMatrix[j][i] = matrix[i][j];
    }
  }

  return transposedMatrix;
};
