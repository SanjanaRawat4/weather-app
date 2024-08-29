const inputbox = document.querySelector('.input-box');
const searchbtn = document.getElementById('searchbtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city){
    const api_key = "3407c5e0dad69ee02b9c5f15c02cf179";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    location_not_found.style.display = "none";
    weather_body.style.display = "flex";

// temperature.innerHTML = `${Math.round(weather_data.main.temp)}°C`;

  description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}km/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/assets/clouds.png";
            break;
            case 'Clear':
                weather_img.src = "/assets/clear.png";
                break;
                case 'Rain':
                    weather_img.src = "/assets/rain.png";
                    break;
                    case 'Mist':
                        weather_img.src = "/assets/mist.png";
                        break;
                        case 'Snow':
                            weather_img.src = "/assets/snow.png";
                            break;

    }
}


searchbtn.addEventListener('click', ()=>{
    checkWeather(inputbox.value);
});