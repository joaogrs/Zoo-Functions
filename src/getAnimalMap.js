const data = require('../data/zoo_data');

const { species } = data;

function animalsBySexSorted(local, sexo) {
  const array2 = [];
  species.filter((specie) => specie.location === local)
    .forEach((animal) => {
      const array3 = [];
      animal.residents.filter((resident) => resident.sex === sexo)
        .forEach((resident1) => array3.push(resident1.name));
      const obj2 = {};
      obj2[animal.name] = array3.sort();
      array2.push(obj2);
    });
  return array2;
}

function animalsBySex(local, sexo) {
  const array2 = [];
  species.filter((specie) => specie.location === local)
    .forEach((animal) => {
      const array3 = [];
      animal.residents.filter((resident) => resident.sex === sexo)
        .forEach((resident1) => array3.push(resident1.name));
      const obj2 = {};
      obj2[animal.name] = array3;
      array2.push(obj2);
    });
  return array2;
}

function retornaObjSorted(local) {
  const array2 = [];
  species.filter((specie) => specie.location === local)
    .forEach((animal) => {
      const array3 = [];
      animal.residents.forEach((resident) => array3.push(resident.name));
      const obj2 = {};
      obj2[animal.name] = array3.sort();
      array2.push(obj2);
    });
  return array2;
}

function retornaObj(local) {
  const array2 = [];
  species.filter((specie) => specie.location === local)
    .forEach((animal) => {
      const array3 = [];
      animal.residents.forEach((resident) => array3.push(resident.name));
      const obj2 = {};
      obj2[animal.name] = array3;
      array2.push(obj2);
    });
  return array2;
}

function retornaAnimal(local) {
  const array1 = [];
  species.filter((specie) => specie.location === local)
    .forEach((animal) => {
      array1.push(animal.name);
    });
  return array1;
}

const notParameter = () => ({
  NE: retornaAnimal('NE'),
  NW: retornaAnimal('NW'),
  SE: retornaAnimal('SE'),
  SW: retornaAnimal('SW'),
});

const sort = () => ({
  NE: retornaObjSorted('NE'),
  NW: retornaObjSorted('NW'),
  SE: retornaObjSorted('SE'),
  SW: retornaObjSorted('SW'),
});

const normalObject = () => ({
  NE: retornaObj('NE'),
  NW: retornaObj('NW'),
  SE: retornaObj('SE'),
  SW: retornaObj('SW'),
});

const ObjectSex = (sex1) => ({
  NE: animalsBySex('NE', sex1),
  NW: animalsBySex('NW', sex1),
  SE: animalsBySex('SE', sex1),
  SW: animalsBySex('SW', sex1),
});

function getAnimalMap(options = {}) {
  const { includeNames, sex, sorted } = options;
  if (!includeNames) {
    return notParameter();
  } if (!sex) {
    if(!sorted) { return normalObject();}
    return sort();
  } if (!sorted) {
    return ObjectSex(sex);
  }
  return {
    NE: animalsBySexSorted('NE', sex),
    NW: animalsBySexSorted('NW', sex),
    SE: animalsBySexSorted('SE', sex),
    SW: animalsBySexSorted('SW', sex),
  };
}

module.exports = getAnimalMap;
