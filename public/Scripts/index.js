$(document).ready(function () {
  getWeather();
  $("#dateText").html(getDate);
  $("#timeText").html(getTime);
});

function getWeather() {
  console.log("IndexJS getWeather message: " + $("#search-box").val());
  $(".loader").addClass("showLoader");
  $(".loader").removeClass("removeLoader");
  fetch(`/weather?LocName=${$("#search-box").val()}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      $(".loader").remove("showLoader");
      $(".loader").addClass("removeLoader");
      $("#locationDP").html(`${$("#search-box").val()}`);
      $("#bigTempDP").html(`${data.temperature}<sup>oc</sup>`);
      $("#smallTempDP").html(`${data.temperature}<sup>oc</sup>`);
      $("#smallWindSpeedDP").html(`${data.windSpeed}m/s`);
      $("#smallHumidityDP").html(`${data.humidity}%`);
      $("#smallWeatherDP").html(`${data.weather}`);
    });
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
