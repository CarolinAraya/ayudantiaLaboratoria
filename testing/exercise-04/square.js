// Archivo `square.js`

const square = (num) => {
  if (num === undefined || typeof num === 'string') {
    return 'Error';
  }
  //Math.pow(base,exponente)
  return Math.pow(num, 2);
};

module.exports = square;
