import { getCurrentWeather } from "../modules/weather.mjs";

// Gets Zion National Park weather when its button is clicked
document.querySelector("#zion").addEventListener("click", () => {
    getCurrentWeather(37.2982, -113.0263, "Zion National Park");
});


 // Gets Yosemite National Park weather when its button is clicked
document.querySelector("#yosemite").addEventListener("click", () => {
    getCurrentWeather(37.7456, -119.5936, "Yosemite National Park");
});


 // Gets Glacier National Park weather when its button is clicked
document.querySelector("#glacier").addEventListener("click", () => {
    getCurrentWeather(48.6966, -113.7183, "Glacier National Park");
});


 // Gets Olympic National Park weather when its button is clicked
document.querySelector("#olympic").addEventListener("click", () => {
    getCurrentWeather(47.8021, -123.6044, "Olympic National Park");
});
