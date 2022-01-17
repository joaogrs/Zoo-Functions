const data = require('../data/zoo_data');

const { species, hours } = data;

function animalsOfDay(day) {
  const availableAnimal = [];
  species.forEach(({ name, availability }) => {
    if (availability.includes(day)) availableAnimal.push(name);
  });
  return !availableAnimal[0] ? 'The zoo will be closed!' : availableAnimal;
}

function fullSchedule() {
  const days = Object.entries(hours);
  const schedules = {};
  days.forEach(([day, { open, close }]) => {
    schedules[day] = {};
    schedules[day].officeHour = `Open from ${open}am until ${close}pm`;
    if (open === 0 && close === 0) {
      schedules[day].officeHour = 'CLOSED';
    }
    schedules[day].exhibition = animalsOfDay(day);
  });
  return schedules;
}

function animalsArray() {
  const animalsArr = [];
  species.forEach(({ name }) => {
    animalsArr.push(name);
  });
  return animalsArr;
}

function dailySchedule(dailySelected) {
  const daysSchedule = fullSchedule();
  const day = {};
  day[dailySelected] = daysSchedule[dailySelected];
  return day;
}

function daysOfAnimals(animal) {
  let animalExhibitionDays = [];
  species.forEach(({ name, availability }) => {
    if (name === animal) animalExhibitionDays = availability;
  });
  return animalExhibitionDays;
}

function getSchedule(scheduleTarget) {
  const days = Object.keys(hours);
  if (!scheduleTarget) return fullSchedule();
  if (days.includes(scheduleTarget)) return dailySchedule(scheduleTarget);
  if (animalsArray().includes(scheduleTarget)) return daysOfAnimals(scheduleTarget);
  return fullSchedule();
}

module.exports = getSchedule;
