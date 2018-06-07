// Archivo `add.spec.js`:

const add = require('./add');

console.log('debería devolver la suma de dos números');
if (add(2,5) === 7) {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}

console.log('debería devolver la suma de sus parametros incluso si uno es string');
if (add(2, '2') === '22') {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}

/*1*/
console.log('debería devolver "Error" si falta uno de los parámetros');//valida si estan los 2 parametros
if (add(2) === 'Error') {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}

