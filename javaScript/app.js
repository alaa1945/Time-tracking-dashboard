//select the radio buttons
let radioBtns = document.querySelectorAll(".time-intervals input");
let hoursWorked = document.querySelectorAll(".hours-worked");
let previousHours = document.querySelectorAll(".last-week-hours");

// fetch data from an api
fetch("./javaScript/data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // check for the clicked radio btn
    radioBtns.forEach((radio) => {
      radio.addEventListener("click", (event) => {
        getHours(event.target.id);
      });
    });

    // get hours
    function getHours(id) {
      for (let i = 0; i < hoursWorked.length; i++) {
        if (id == "daily") {
          hoursWorked[i].textContent =
            data[i].timeframes["daily"].current + "hrs";
          previousHours[i].textContent =
            "Yesterday - " + data[i].timeframes["daily"].previous + "hrs";
        } else if (id == "weekly") {
          hoursWorked[i].textContent =
            data[i].timeframes["weekly"].current + "hrs";
          previousHours[i].textContent =
            "Last Week - " + data[i].timeframes["weekly"].previous + "hrs";
        } else {
          hoursWorked[i].textContent =
            data[i].timeframes["monthly"].current + "hrs";
          previousHours[i].textContent =
            "Last Month - " + data[i].timeframes["monthly"].previous + "hrs";
        }
      }
    }
  });
