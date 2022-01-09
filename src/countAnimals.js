const data = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

const {species} = data;

function countAnimals(animal) {
  // acessar o array de especies
  // para cada animal acessar a chave residentes e contar quantos elementos possui
  // retornar nome e numero de inviduos em objeto caso parametro vazio
  if(!animal) {
    return console.log(species
    .reduce((acc,specie) => {
      acc[specie.name] = specie.residents.length;
      return acc
    }, {}))
  }

}

countAnimals()
module.exports = countAnimals;
