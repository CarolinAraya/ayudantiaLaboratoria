// Archivo `addSquare.js`

const addSquare = (num1, num2) => {
 if (typeof num1 === 'string' || typeof num2 === 'string') {
   return 'Error';
 }
 return Math.pow(num1, 2) + Math.pow(num2, 2);
};

module.exports = addSquare;
