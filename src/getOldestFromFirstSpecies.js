const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getOldestFromFirstSpecies(id) {
  const animalID = employees.find((employee) => employee.id === id).responsibleFor[0];
  const firstAnimal = species.find((specie) => specie.id === animalID);
  let age = 0;
  let animal = 'alguma coisa';
  firstAnimal.residents.forEach((resident) => {
    if (resident.age > age) {
      age = resident.age;
      animal = resident;
    }
  });
  return [animal.name, animal.sex, animal.age];
}

module.exports = getOldestFromFirstSpecies;
