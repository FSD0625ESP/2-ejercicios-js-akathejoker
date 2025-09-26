const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  const suma = arr.reduce((total, num) => total + num, 0);
  return suma;
};

const multiply = function (arr) {
  return arr.reduce((total, num) => total * num, 1);
};

const power = function (base, exponente) {
  return Math.pow(base, exponente);
};

const factorial = function (n) {
  if (n === 0 || n === 1) return 1; // casos base
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
