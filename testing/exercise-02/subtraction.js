// Archivo `subtraction.js`
const subtraction = (firstNumber, secondNumber) => {
  /* Acá va tu código */
  if (firstNumber < 0 || secondNumber < 0) {
    return 'Error';
  }
  return firstNumber -secondNumber;
};


module.exports = subtraction;