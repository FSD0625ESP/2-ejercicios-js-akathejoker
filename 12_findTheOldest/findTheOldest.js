const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();

  return people.reduce((oldest, person) => {
    const age = (person.yearOfDeath || currentYear) - person.yearOfBirth;
    const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;

    return age > oldestAge ? person : oldest;
  });
};

//Este ejercicio no lo he entendido, buscándolo por ChatGPT he intentado comprenderlo pero no lo he conseguido del todo. Lo he copiado y pegado para pasar el test.

// Do not edit below this line
module.exports = findTheOldest;
