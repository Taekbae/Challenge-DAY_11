const contentContainer = document.querySelector(".contents-container");
const jsIndicator = document.getElementById("jsIndicator");
const jsLocation = document.getElementById("jsLocation");
const API_URL = "http://ip-api.com/json/";

const SendURL = url => {
  fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        console.log("Network response was not ok.");
      }
    })
    .then(json => {
      jsIndicator.style.display = "none";
      jsLocation.innerHTML =
        "<h3>🌏 Your Location : " + json.city + ", " + json.country + "</h3>";
    })
    .catch(function(error) {
      console.log(
        "There has been a problem with your fetch operation: " + error.message
      );
    });
};

function init() {
  contentContainer.addEventListener("load", SendURL(API_URL));
}

if (contentContainer) {
  init();
}
