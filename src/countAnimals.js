const data = require('../data/zoo_data');

const {species} = data;

const count = (specie2) => species
.find((specie) => specie.name === specie2).residents.length;

const countSex = (specie3, sex) => species
.find((specie) => specie.name === specie3)
.residents.filter((resident)=>resident.sex === sex).length;

function countAnimals(animal) {
  if(!animal) {
    return species
    .reduce((acc,specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {})
  }
  if (animal.sex === undefined){
    return count(animal.specie);
  }
  return countSex(animal.specie, animal.sex);
}

countAnimals()

module.exports = countAnimals;
