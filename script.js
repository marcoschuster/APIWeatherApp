const apiKey = "...";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");
const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");
const weatherImg = document.getElementById("weatherImg");
const mainContainer = document.querySelector("#mainContainer");
const weatherDescription = document.querySelector("#weatherDescription");
const windSpeed = document.querySelector("#windSpeed");

async function getWeather(city) { 
    if (searchBar.value === "") {
        alert("Please enter a city name");
        return;
    }

    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    console.log(data);

    if (data.cod === 200) {
        cityName.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + "°C";
        humidity.innerHTML = `${data.main.humidity}%`;
        pressure.innerHTML = `${data.main.pressure} hPa`;
        weatherDescription.innerHTML = data.weather[0].description;
        windSpeed.innerHTML =`${data.wind.speed}km/h`;
        if (data.weather[0].main == "Clouds") {
            weatherImg.src = "https://img.icons8.com/?size=100&id=mD5PxYIC4jJB&format=png&color=000000";
        } else if (data.weather[0].main == "Clear") {
            weatherImg.src = "https://img.icons8.com/?size=100&id=g9gfDk0bIzCw&format=png&color=000000";
        } else if (data.weather[0].main == "Rain") {
            weatherImg.src = "https://img.icons8.com/?size=100&id=F74ZFbDNArxN&format=png&color=000000";
        } else if(data.weather[0].main == "Snow"){
            weatherImg.src = "https://img.icons8.com/?size=100&id=lhHYvtk78Mc7&format=png&color=000000";
        } else if(data.weather[0].main == "Mist"){
            weatherImg.src = "https://img.icons8.com/?size=100&id=ftoIL8voDBq1&format=png&color=000000";
        } else if(data.weather[0].main == "Drizzle"){
            weatherImg.src = "https://img.icons8.com/?size=100&id=KDjKPrgADUUd&format=png&color=000000";
        } else if(data.weather[0].main == "Thunderstorm"){
            weatherImg.src = "https://img.icons8.com/?size=100&id=1dfymYbHNjRF&format=png&color=000000";
        }
    } else {
        mainContainer.classList.add("error");
        setTimeout(() => {
            mainContainer.classList.remove("error");
            console.log("error")
        }, 1000);
    }

    document.querySelector("#weatherInfo").style.display = "block";
}

searchBtn.addEventListener("click", (event) => {
event.preventDefault();
    getWeather(searchBar.value)
}
);