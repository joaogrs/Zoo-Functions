const data = require('../data/zoo_data');
const { employees } = data;

const getNameAnimalByID = (id) => {
  return data.species.find((specie) => specie.id === id).name;
}
const getLocationAnimalByID = (id) => {
  return data.species.find((specie) => specie.id === id).location;
}
function consult (nameOrId) {
  const employeeObj = employees
  .find((employee) => employee.id === nameOrId || employee.firstName === nameOrId || employee.lastName === nameOrId );
  if (employeeObj === undefined) {
    const objReturn = 0 ;
  } else {
  const objReturn = {id: `${employeeObj.id}`, fullName: `${employeeObj.firstName} ${employeeObj.lastName}`};
  const arr1 = [];
  const arr2 = [];
  employeeObj.responsibleFor.forEach((id1) => {
    arr1.push(getNameAnimalByID(id1));
    arr2.push(getLocationAnimalByID(id1));
  });
  objReturn['species'] = arr1;
  objReturn['locations'] = arr2 ;
  return objReturn;
    };
};
const criaLista = () => {
  const list = [];
  employees.forEach((employee) => list.push(consult(employee.firstName)));
  return list;
}

function getEmployeesCoverage(options = {}) {
  const verify = employees
  .find((employee) => employee.id === options.id || employee.firstName === options.name|| employee.lastName === options.name);

  if(!options.name && !options.id) {
    return criaLista();
  }
  if (verify === undefined) {
    throw new Error('Informações inválidas');
  }
  if (options.name) {
    return consult(options.name);
  }
  if (options.id) {
    return consult(options.id);
  }
}

console.log(getEmployeesCoverage())
module.exports = getEmployeesCoverage;
