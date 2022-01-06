const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const selectedAnimal = species.find((specie) => specie.name === animal);
  const { residents } = selectedAnimal;
  return residents.filter((year) => year.age > age).length === residents.length;
}

module.exports = getAnimalsOlderThan;
