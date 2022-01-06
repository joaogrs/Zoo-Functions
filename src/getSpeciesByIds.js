const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  const animals = []; /* array vazio */
  ids.forEach((id) =>
    animals.push(species.find((animal) => animal.id === id)));
  console.log(animals);
  return animals;
}

module.exports = getSpeciesByIds;
