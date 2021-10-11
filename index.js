const localStorageCity = localStorage.getItem("city");
const currentCity = document.querySelector("#current-city");

if(localStorageCity === null){
    localStorage.setItem("city", "București");
    localStorageCity = "București";
    currentCity.innerHTML = "București";
}
else{
    displayCurrentWeather(localStorageCity);
    currentCity.innerHTML = localStorageCity;
}

