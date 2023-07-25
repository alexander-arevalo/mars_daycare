let nav = 0;

const calendar = document.getElementById("calendar");
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function load() {
  const dt = new Date();

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const paddingDays = firstDayOfMonth.getDay();

  document.getElementById("monthDisplay").innerText = `${dt.toLocaleDateString(
    "en-us",
    { month: "long" }
  )} ${year}`;

  calendar.innerHTML = "";

  for (let i = 1; i <= paddingDays; i++) {
    const daySquare = createDaySquare("", "padding");
    calendar.appendChild(daySquare);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const daySquare = createDaySquare(i);

    if (i === day && nav === 0) {
      daySquare.setAttribute("id", "currentDay");
    }

    calendar.appendChild(daySquare);
  }
}

function createDaySquare(day, additionalClass) {
  const daySquare = document.createElement("div");
  daySquare.classList.add("day");
  if (additionalClass) {
    daySquare.classList.add(additionalClass);
  }
  if (day !== "") {
    daySquare.innerText = day;
  }
  return daySquare;
}

function initButtons() {
  document.getElementById("nextButton").addEventListener("click", () => {
    nav++;
    load();
  });

  document.getElementById("backButton").addEventListener("click", () => {
    nav--;
    load();
  });
}

initButtons();
load();
