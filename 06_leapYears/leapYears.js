const leapYears = function (year) {
  // Si es divisible por 4 y no por 100 → bisiesto
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }
  // Si es divisible por 400 → bisiesto
  if (year % 400 === 0) {
    return true;
  }
  // En cualquier otro caso → no es bisiesto
  else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
