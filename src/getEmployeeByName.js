const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  const vazio = {};
  const x = (employer) => employer.firstName === employeeName || employer.lastName === employeeName;
  const selectedEmployer = employees.find(x);

  if (!employeeName) {
    return vazio;
  }
  return selectedEmployer;
}

module.exports = getEmployeeByName;
