// Changes the background image to the selected national park
export function changeBackground(park) {
    document.body.style.backgroundImage = `url('images/${park}.webp')`;
}

// Gets the current weather for the selected national park
export async function getCurrentWeather(lat, lon, parkName) {
    const apiKey = "1ea6ed549d30535f9bf478295252b02e";

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
        );

        displayWeather(await response.json(), parkName);

    } catch (error) {
        console.error("Fetch error:", error);
    }
}

// Displays the weather information on the webpage
function displayWeather(cw, parkName) {
    if (cw.cod !== 200) {
        console.error("Weather API error:", cw.message);
        return;
    }


    document.querySelector("#weather").innerHTML = `
    <h2>${parkName}</h2>
    <p>Current Temperature: ${Math.round(cw.main.temp)}°F</p>
    <img src="https://openweathermap.org/img/wn/${cw.weather[0].icon}@2x.png"
         alt="${cw.weather[0].description}">
    <p>Conditions: ${cw.weather[0].description}</p>
    <p>Low: ${Math.round(cw.main.temp_min)}°F</p>
    <p>High: ${Math.round(cw.main.temp_max)}°F</p>
    <p>Wind Speed: ${Math.round(cw.wind.speed)} mph</p>
    <p>Sunrise: ${convert(cw.sys.sunrise)} AM</p>
    <p>Sunset: ${convert(cw.sys.sunset)} PM</p>

`;

}


// Converts the sunrise and sunset timestamps into readable times
function convert(ts) {
    const sunTime = new Date(ts * 1000);

    const h = sunTime.getHours() > 12
        ? sunTime.getHours() - 12
        : sunTime.getHours();

    const m = sunTime.getMinutes().toString().padStart(2, "0");

    return `${h}:${m}`;
}



