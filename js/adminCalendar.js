async function handleSubmit(event) {
    event.preventDefault();
    var title = document.getElementById("title").value;
    var date1 = document.getElementById("date").value;
    var date = date1.toString();
    var time1 = document.getElementById("time").value;
    var time = time1.toString();
    var description = document.getElementById("description").value;


console.log("TEST");
console.log(
    `for testing ${title} ${date} ${time} ${description}`
);
await axios
    .post ("http://localhost:3001/api/event", {
    title,
    date,
    time,
    description,
    })
    .then(function (res) {
        console.log("Event Added Successfully");
      })
      .catch(function (err) {
        console.log(err);
      });
  
    document.getElementById("eventForm").reset();
  }


document.getElementById("eventForm").addEventListener("submit", handleSubmit);

