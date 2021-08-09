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

let futureDate = new Date(2021, 7, 10, 22, 45, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const day = futureDate.getDate();

const hour = futureDate.getHours();
const minute = futureDate.getMinutes()

const weekday = weekdays[futureDate.getDay()-3];
giveaway.textContent = `giveaway ends on ${weekday}, ${day} ${month} ${year} ${hour} ${minute}am`;

const futureTime = futureDate.getTime();
function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  
  const getDay = 24 * 60 * 60 * 1000;
  const getHour = 60 * 60 * 1000;
  const getMinute = 60 * 1000;

  let days = Math.floor(t / getDay);
  let hours = Math.floor((t % getDay) / getHour);
  let minute = Math.floor((t % getHour) / getMinute);
  let seconds = Math.floor((t % getMinute) / 1000);
  console.log(days);
  const values = [days, hours, minute, seconds];
  function format(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }
  list.forEach((item,index) => {
    item.textContent = format(values[index]);
  })
  if (t <= 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">FINISH</h4>`
  }
}

let countdown = setInterval(getRemainingTime, 1000);