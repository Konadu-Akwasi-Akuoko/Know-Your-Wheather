$(document).ready(function () {
  getWeather();
  getWeatherMobile();
  $(".dateText").html(getDate);
  $(".timeText").html(getTime);

  setInterval(() => {
    $(".dateText").html(getDate);
    $(".timeText").html(getTime);
  }, 5000);
});

function getWeather() {
  console.log("IndexJS getWeather message: " + $(".search-box").val());
  $(".loader").addClass("showLoader");
  $(".loader").removeClass("removeLoader");
  fetch(`/weather?LocName=${$(".search-box").val()}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      $(".loader").remove("showLoader");
      $(".loader").addClass("removeLoader");
      $("#locationDP").html(`${$(".search-box").val()}`);
      //Big screens data
      $("#bigTempDP").html(`${data.temperature}<sup>oc</sup>`);
      $("#bigWindSpeedDP").html(`${data.windSpeed} m/s`);
      $("#bigHumidityDP").html(`${data.humidity}%`);
      $("#bigWeatherDP").html(`${data.weather}`);
    });
}

function getWeatherMobile() {
  console.log("IndexJS getWeather message: " + $(".search-box-mobile").val());
  $(".loader").addClass("showLoader");
  $(".loader").removeClass("removeLoader");
  fetch(`/weather?LocName=${$(".search-box-mobile").val()}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      $(".loader").remove("showLoader");
      $(".loader").addClass("removeLoader");
      $(".locationDP-mobile").html(`${$(".search-box-mobile").val()}`);
      //Small screens data
      $("#smallTempDP").html(`${data.temperature}<sup>oc</sup>`);
      console.log($("#smallTempDP").html());
      $("#smallWindSpeedDP").html(`${data.windSpeed} m/s`);
      $("#smallHumidityDP").html(`${data.humidity}%`);
      $("#smallWeatherDP").html(`${data.weather}`);
    });
}

function onClickName(event) {
  console.log(event.target.innerText);
  $(".loader").addClass("showLoader");
  $(".loader").removeClass("removeLoader");
  fetch(`/weather?LocName=${event.target.innerText}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      $(".loader").remove("showLoader");
      $(".loader").addClass("removeLoader");
      $("#locationDP").html(`${event.target.innerText}`);
      $(".search-box").val(`${event.target.innerText}`);
      //Big screens data
      $("#bigTempDP").html(`${data.temperature}<sup>oc</sup>`);
      $("#bigWindSpeedDP").html(`${data.windSpeed} m/s`);
      $("#bigHumidityDP").html(`${data.humidity}%`);
      $("#bigWeatherDP").html(`${data.weather}`);
    });
}

function onCancel(event) {
  $(".view-source-code").addClass("hide");
}

//Getting the date in MM/DD/YYYY
function getDate() {
  let date = new Date();
  return (
    date.getDate() +
    "/" +
    Number(date.getMonth() + 1).toString() +
    "/" +
    +date.getFullYear()
  );
}

//Getting the time in hh/mm
function getTime() {
  let date = new Date();
  return date.getHours() + ":" + date.getMinutes();
}
