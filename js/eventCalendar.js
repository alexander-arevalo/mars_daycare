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

const events = [
  {
    day: 5,
    title: "Meeting",
    description: "Parents and Teacher Me",
  },
  {
    day: 10,
    title: "Project deadline",
    description: "Submit final deliverables",
  },
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

    const event = events.find((e) => e.day === i);
    if (event) {
      const eventDiv = createEventDiv(event);
      daySquare.appendChild(eventDiv);
    }

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
function createEventDiv(event) {
  const eventDiv = document.createElement("div");
  eventDiv.classList.add("event");
  eventDiv.innerText = event.title + ": " + event.description;
  return eventDiv;
}

function createPopup(event) {
  const popup = document.createElement("div");
  popup.classList.add("popup");

  const closeButton = document.createElement("button");
  closeButton.innerText = "Close";
  closeButton.classList.add("closeButton");
  closeButton.addEventListener("click", () => {
    popup.remove();
  });

  const content = document.createElement("div");
  content.classList.add("popup-content");

  const titleElement = document.createElement("h3");
  titleElement.innerText = event.title;
  content.appendChild(titleElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.innerText = event.description;
  content.appendChild(descriptionElement);

  popup.appendChild(closeButton);
  popup.appendChild(content);

  return popup;
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

// Attach event listener to the day elements
calendar.addEventListener("click", (event) => {
  const clickedDay = event.target;
  if (clickedDay.classList.contains("day") && clickedDay.innerText !== "") {
    const eventDiv = clickedDay.querySelector(".event");
    if (eventDiv) {
      const event = events.find(
        (e) => e.day === parseInt(clickedDay.innerText)
      );
      if (event) {
        const popup = createPopup(event);
        clickedDay.appendChild(popup);
      }
    }
  }
});
