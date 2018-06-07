// Archivo `add.js`

const add = (firstNumber, secondNumber) => {
  /* Acá va tu código */
  if (firstNumber === undefined || secondNumber === undefined) {
    return 'Error';
  }

  return firstNumber + secondNumber;
};

module.exports = add;