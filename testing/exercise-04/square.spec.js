// Archivo `square.spec.js`:

const square = require('./square');

console.log('debería retornar el cuadrado de un número');
if (square(6) === 36) {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}

console.log('debería retornar "Error" si el parámetro es un string');
if (square('2') === 'Error') {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}

console.log('debería retornar "Error" si el parámetro no existe');
if (square() === 'Error') {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}
