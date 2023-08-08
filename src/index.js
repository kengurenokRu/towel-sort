
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let matrix2 = [];
  if (matrix) {
  for (let i=0; i<matrix.length; i++)
  {
    if (i%2==1)
  {
    for (let j=matrix[i].length-1; j>=0; j--)
    {
matrix2.push(matrix[i][j]);
    }
  }
  else
  {
    for (let j=0; j<matrix[i].length; j++)
    {
      matrix2.push(matrix[i][j]);
    }
  }
  }
}
  return matrix2;
}
