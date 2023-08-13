var events = [];

async function getEventData() {
  try {
    const response = await axios.get("http://localhost:3001/api/event");

    const mappedEvents = response.data.map((event) => {
      const eventDate = new Date(event.date);
      return {
        month: eventDate.getMonth(), // Adding 1 because getMonth() returns 0-based months (0-11)
        day: eventDate.getDate(),
        title: event.title,
        description: event.description,
        time: event.time,
      };
    });

    events.push(...mappedEvents);

    console.log(events);
  } catch (error) {
    console.error("Error fetching event data:", error);
  }
}

(async function () {
  await getEventData();
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

    document.getElementById(
      "monthDisplay"
    ).innerText = `${dt.toLocaleDateString("en-us", {
      month: "long",
    })} ${year}`;

    calendar.innerHTML = "";

    for (let i = 1; i <= paddingDays; i++) {
      const daySquare = createDaySquare("", "padding");
      calendar.appendChild(daySquare);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const daySquare = createDaySquare(i);

      const matchingEvents = events.filter(
        (e) => e.day === i && e.month === month
      );

      // Add matching events to the day square
      if (matchingEvents.length > 0) {
        matchingEvents.forEach((event) => {
          const eventDiv = createEventDiv(event);
          daySquare.appendChild(eventDiv);
        });
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
    eventDiv.innerText = event.title + ": " + event.description + event.time;
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

    const timeElement = document.createElement("p");
    timeElement.innerText = event.time;
    content.appendChild(timeElement);

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

  calendar.addEventListener("click", (event) => {
    const clickedDay = event.target;
    if (clickedDay.classList.contains("day") && clickedDay.innerText !== "") {
      const day = parseInt(clickedDay.innerText);
      const month = new Date().getMonth() + nav;
      const matchingEvent = events.find(
        (e) => e.day === day && e.month === month
      );
      if (matchingEvent) {
        const popup = createPopup(matchingEvent);
        clickedDay.appendChild(popup);
      }
    }
  });
})();
