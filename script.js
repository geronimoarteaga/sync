var date = new Date();
date.setDate(1);

window.onload = function() {
  Generate_Month(date.getMonth());
};

function dayOfWeekAsString(dayIndex) {
  return ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"][dayIndex];
}

function monthsAsString(monthIndex) {
  return ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"][monthIndex];
}

function createcalendar_jsDay(num, day, month) {
  var currentcalendar_js = document.getElementById("calendar_js");

  var newDay = document.createElement("div");
  var date = document.createElement("p");
  date.innerHTML = num;

  var dayElement = document.createElement("p");
  dayElement.innerHTML = day;

  newDay.className = "calendar_js-day";

  var dateActual = new Date();
  if (num == dateActual.getDate() && month == dateActual.getMonth()) {
    var special_jsElement = document.createElement("p");
    special_jsElement.className = "special_jsElement";
    newDay.appendChild(special_jsElement);
    newDay.className = "calendar_js-day special_js";
  }

  newDay.appendChild(date);
//  newDay.appendChild(dayElement);

  currentcalendar_js.appendChild(newDay);
}

function jsCalendar_EmptyDays(days) {
  var currentcalendar_js = document.getElementById("calendar_js");

  for (i = 0; i < days; i++) {

    var newDay = document.createElement("div");
    var date = document.createElement("p");
    var dayElement = document.createElement("p");
    newDay.className = "calendar_js-empty";

    newDay.appendChild(date);
    newDay.appendChild(dayElement);

    currentcalendar_js.appendChild(newDay);
  }
}

function clearcalendar_js() {
  var currentcalendar_js = document.getElementById("calendar_js");

  currentcalendar_js.innerHTML = "";

  for (i = 0; i < 7; i++) {

    var newDay = document.createElement("div");
    var dayElement = document.createElement("p");
    dayElement.innerHTML = dayOfWeekAsString(i);
    newDay.className = "calendar_js-day special_js";

    newDay.appendChild(dayElement);

    currentcalendar_js.appendChild(newDay);
  }
}

function Create_Month(i) {
  date.setMonth(i);
  Generate_Month(date.getMonth());
}

// generate a month
function Generate_Month(month) {
  clearcalendar_js();
  var currentcalendar_js = document.getElementById("calendar_js");

  var date_i = new Date();
  date_i.setDate(date.getDate());
  date_i.setMonth(month);
  date_i.setYear(date.getFullYear());

  jsCalendar_EmptyDays(date_i.getDay());

  createcalendar_jsDay(date_i.getDate(), dayOfWeekAsString(date_i.getDay()), date_i.getMonth());
  date_i.setDate(date_i.getDate() + 1);

  while (date_i.getDate() != 1) {
    createcalendar_jsDay(date_i.getDate(), dayOfWeekAsString(date_i.getDay()), date_i.getMonth());
    date_i.setDate(date_i.getDate() + 1);
  }
}
