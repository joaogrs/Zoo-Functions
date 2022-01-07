const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  const vazio = {};

  const selectedEmployer = employees.find((employer) => {
    employer.firstName === employeeName || employer.lastName === employeeName});

  if (!employeeName) {
    return vazio;
  }
  return selectedEmployer;
}

module.exports = getEmployeeByName;
