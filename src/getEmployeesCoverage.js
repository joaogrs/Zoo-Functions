const data = require('../data/zoo_data');

const { employees } = data;

const getNameAnimalByID = (id) => data.species.find((specie) => specie.id === id).name;

const getLocationAnimalByID = (id) => data.species.find((specie) => specie.id === id).location;

function consult(nameOrId) {
  const employeeObj = employees
    .find((employee) => employee.id === nameOrId
    || employee.firstName === nameOrId || employee.lastName === nameOrId);
  if (employeeObj === undefined) {
    let objReturn;
    return objReturn;
  }
  const objReturn = { id: `${employeeObj.id}`,
    fullName: `${employeeObj.firstName} ${employeeObj.lastName}` };
  const arr1 = [];
  const arr2 = [];
  employeeObj.responsibleFor.forEach((id1) => {
    arr1.push(getNameAnimalByID(id1));
    arr2.push(getLocationAnimalByID(id1));
  });
  objReturn.species = arr1;
  objReturn.locations = arr2;
  return objReturn;
}
const criaLista = () => {
  const list = [];
  employees.forEach((employee) => list.push(consult(employee.firstName)));
  return list;
};

const aux = (par) => {
  if (!par) return 1;
  if (par) {
    const aux1 = employees
    .find((employee) => employee.id === par.id
  || employee.firstName === par.name || employee.lastName === par.name);
    if (aux1 === undefined) {
      const aux1 = 0;
      return aux1;
    }
  }
};

function getEmployeesCoverage(options) {
  const verify = aux(options)

  if (!options) return criaLista();
  if (verify === 0) {
    throw new Error('Informações inválidas');
  }
  if (options.name) {
      return consult(options.name);
  }
  if (options.id) {
    return consult(options.id);
  }
}

module.exports = getEmployeesCoverage;
