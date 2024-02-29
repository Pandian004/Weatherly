let city_name = document.getElementById("search-city");
let search_btn = document.getElementById("search-btn");
let weather_img = document.getElementById("weather-img");

window.onload = async function(){
    const response =  await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/cuddalore?unitGroup=metric&key=CU9K62RLZXPQRQMF5563FML98&contentType=json" );
    const data = await response.json();
    document.getElementById("city").innerHTML = data.address[0].toUpperCase()+data.address.slice(1);
    document.getElementById("temp").innerHTML = Math.trunc(data.currentConditions.temp);
    document.getElementById("wind-speed").innerHTML = data.currentConditions.windspeed + " Km/hr";
    document.getElementById("humidity").innerHTML = Math.trunc(data.currentConditions.humidity)+ " %";

    weather_img.src = "./asserts/"+data.currentConditions.icon+".png"; 
}

async function checkWeather(city){
    const response =  await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+`${city}`+"?unitGroup=metric&key=CU9K62RLZXPQRQMF5563FML98&contentType=json" );
    const data = await response.json();
    document.getElementById("city").innerHTML =  data.address[0].toUpperCase()+data.address.slice(1);
    document.getElementById("temp").innerHTML = Math.trunc(data.currentConditions.temp);
    document.getElementById("wind-speed").innerHTML = data.currentConditions.windspeed + " Km/hr";
    document.getElementById("humidity").innerHTML = Math.trunc(data.currentConditions.humidity)+ " %";

    weather_img.src = "./asserts/"+data.currentConditions.icon+".png"; 
}

 search_btn.addEventListener("click", () => {
    checkWeather(city_name.value);
 })


