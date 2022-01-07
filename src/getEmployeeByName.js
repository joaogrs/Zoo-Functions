const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  const vazio = {};
  const func = (employer) => employer.firstName === employeeName || employer.lastName === employeeName;
  const selectedEmployer = employees.find(func);

  if (!employeeName) {
    return vazio;
  }
  return selectedEmployer;
}

module.exports = getEmployeeByName;
