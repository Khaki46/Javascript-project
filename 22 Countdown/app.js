const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const list =  document.querySelectorAll('.days');

let futureDate = new Date(2021, 8, 8, 11, 30, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth() - 1];
const day = futureDate.getDate();

const hour = futureDate.getHours();
const minute = futureDate.getMinutes()

const weekday = weekdays[futureDate.getDay()-3];
giveaway.textContent = `giveaway ends on ${weekday}, ${day} ${month} ${year} ${hour} ${minute}am`;

