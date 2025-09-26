const removeFromArray = function (array, ...valoresEliminar) {
  return array.filter((item) => !valoresEliminar.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
