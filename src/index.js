//form
function register(event) {
  event.preventDefault();
  let firstName = document.querySelector("#firstname-text-input");
  let lastName = document.querySelector("#lastname-text-input");
  let email = document.querySelector("#email-text-input");
  firstName = firstName.value;
  firstName = firstName[0].toUpperCase() + firstName.substring(1);
  alert(
    "Geschafft, " +
      firstName +
      "! In Kürze erhälst du deine Anmeldebestätigung per E-Mail."
  );
}

let form = document.querySelector("#submit-form");
form.addEventListener("submit", register);

//countdown
const deadline = "May 29 2021 11:00:00 GMT+0100";

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

getTimeRemaining(deadline).seconds;
getTimeRemaining(deadline).minutes;
getTimeRemaining(deadline).hours;
getTimeRemaining(deadline).days;

function initializeClock(id, endtime) {
  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");
  const timeinterval = setInterval(() => {
    const t = getTimeRemaining(endtime);
    days.innerHTML = t.days;
    hours.innerHTML = t.hours;
    minutes.innerHTML = t.minutes;
    seconds.innerHTML = t.seconds;
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }, 1000);
}

setInterval;

initializeClock("clockdiv", deadline);
