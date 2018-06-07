// Archivo `codeHard.js`

const codeHard = (num) => {
  if (num === undefined) {
    return 'Error';
  }

  if (num % 3 === 0 && num % 5 === 0) {
    return 'CodeHard';
  }

  if (num % 3 === 0) {
    return 'Code';
  }

  if (num % 5 === 0) {
    return 'Hard';
  }

  return num;

};

module.exports = codeHard;
