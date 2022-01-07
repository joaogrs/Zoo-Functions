const data = require('../data/zoo_data');
const { employees } = data;

function isManager(id) {
  const manager = [];
  employees.forEach((employee)=> manager.push(employee.managers));
  const managersClean = manager.reduce((arr, element) => arr.concat(element), []);
  return managersClean.includes(id);
}

function getRelatedEmployees(managerId) {
  const responsibleFor = [];
  if(isManager(managerId) === true) {
  const responsibleFor2 = employees.filter((employee2) => employee2.managers.includes(managerId))
  const func = (employee3) => responsibleFor.push(`${employee3.firstName} ${employee3.lastName}`)
  responsibleFor2.forEach(func);
  return responsibleFor;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
