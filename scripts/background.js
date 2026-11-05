import { changeBackground } from "../modules/weather.mjs";

// Selects the four national park buttons
const zion = document.querySelector("#zion");
const yosemite = document.querySelector("#yosemite");
const glacier = document.querySelector("#glacier");
const olympic = document.querySelector("#olympic");

// Changes the background when a park button is clicked
zion.addEventListener("click", () => {
    changeBackground("zion");
});

yosemite.addEventListener("click", () => {
    changeBackground("yosemite");
});

glacier.addEventListener("click", () => {
    changeBackground("glacier");
});

olympic.addEventListener("click", () => {
    changeBackground("olympic");
});

// Highlights the selected national park button
const parkButtons = document.querySelectorAll(".park-buttons button");

parkButtons.forEach((button) => {
    button.addEventListener("click", () => {
        parkButtons.forEach((btn) => {
            btn.classList.remove("current");
        });

        button.classList.add("current");
    });
});
