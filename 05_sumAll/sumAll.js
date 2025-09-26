const sumAll = function (a, b) {
  const start = Math.min(a, b);
  const end = Math.max(a, b);

  let suma = 0;
  for (let i = start; i <= end; i++) {
    suma += i;
  }

  return suma;
};

// Do not edit below this line
module.exports = sumAll;
