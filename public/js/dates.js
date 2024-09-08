// select "month" id
const monthYear = document.getElementById("month");

// select all "day" class
const days = document.querySelectorAll(".day");

// initiate the date
const dates = new Date();

// make array for naming the month
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// insert data to frontend
monthYear.innerText = `${month[dates.getMonth()]} ${dates.getFullYear()}`;

// make variable "dateNow" for get weekday (0-6)
let dateNow = dates.getDay();

// change the color for today's date
days[dateNow].classList.remove("bg-basic");
days[dateNow].classList.add("bg-tertiary");

// make variable "guestDay" for days on a week
let guestDay = new Date(dates);

// looping for get days on a week (0-6)
for (i = 0; i <= 6; i++) {
    guestDay.setDate(dates.getDate() - dateNow);
    dateNow--;

    // insert data to frontend
    days[i].innerText = guestDay.getDate();
}
