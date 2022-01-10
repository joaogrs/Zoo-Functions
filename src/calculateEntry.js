const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      child += 1;}
    else if (entrant.age >= 18 && entrant.age < 50) {
      adult += 1;}
    else if (entrant.age >= 50) {
      senior += 1;
    }
  });
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (entrants !== undefined && entrants.length > 0) {
    const numPessoas = countEntrants(entrants);
    const childs = numPessoas.child * 20.99;
    const adults = numPessoas.adult * 49.99;
    const seniors = numPessoas.senior * 24.99;
    return childs + adults + seniors;
  }
  return 0;
}

module.exports = { calculateEntry, countEntrants };
