var calendarContainer = document.getElementById("calendarBody");
var monthYear = document.getElementById("monthYear");
var eventDate = document.getElementById("eventDate");
var eventTime = document.getElementById("eventTime");
var eventLocation = document.getElementById("eventLocation");
var eventDetails = document.getElementById("eventDetails");

var currentDate = new Date();
var currentMonth = currentDate.getMonth();
var currentYear = currentDate.getFullYear();

monthYear.innerHTML = getMonthAndYear(currentMonth, currentYear);

generateCalendar(currentMonth, currentYear);

function generateCalendar(month, year) {
  calendarContainer.innerHTML = "";

  var firstDay = new Date(year, month, 1);
  var lastDay = new Date(year, month + 1, 0).getDate();
  var startDay = firstDay.getDay();
  var date = 1;

  for (var row = 0; row < 6; row++) {
    var calendarRow = document.createElement("tr");

    for (var col = 0; col < 7; col++) {
      if (row === 0 && col < startDay) {
        var emptyCell = document.createElement("td");
        calendarRow.appendChild(emptyCell);
      } else if (date > lastDay) {
        break;
      } else {
        var calendarCell = document.createElement("td");
        calendarCell.textContent = date;

        // Validate year and month
        if (year !== 2023 || (year === 2023 && month < currentMonth)) {
          calendarCell.classList.add("disabled");
          calendarCell.onclick = null; // Disable click event
        } else {
          calendarCell.onclick = function() {
            showEventDetails(date);
          };
        }

        calendarRow.appendChild(calendarCell);
        date++;
      }
    }

    calendarContainer.appendChild(calendarRow);

    if (date > lastDay) {
      break;
    }
  }
}

function prevMonth() {
  if (currentMonth === 0) {
    currentYear--;
    currentMonth = 11;
  } else {
    currentMonth--;
  }
  updateCalendar();
}

function nextMonth() {
  if (currentMonth === 11) {
    currentYear++;
    currentMonth = 0;
  } else {
    currentMonth++;
  }
  updateCalendar();
}

function updateCalendar() {
  monthYear.innerHTML = getMonthAndYear(currentMonth, currentYear);
  generateCalendar(currentMonth, currentYear);
}

function showEventDetails(date) {
  eventDate.textContent = currentMonth + 1 + "/" + date + "/" + currentYear;
  eventTime.textContent = "10:00 AM";
  eventLocation.textContent = "Event Hall";
  eventDetails.style.display = "block";
}

function getMonthAndYear(month, year) {
  var monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return monthNames[month] + " " + year;
}