const bucharest = document.querySelector('.bucharest');
const timisoara = document.querySelector('.timisoara');
const oradea = document.querySelector('.oradea');
const arad = document.querySelector('.arad');
const sibiu = document.querySelector('.sibiu');

function updateCity(city){
    const currentCity = document.querySelector("#current-city");
    currentCity.innerHTML = city;
    displayCurrentWeather(city);
    localStorage.setItem('city', city);
}

bucharest.addEventListener('click', function(){
    updateCity("București");
});
timisoara.addEventListener('click', function(){
    updateCity("Timișoara");
});
oradea.addEventListener('click', function(){
    updateCity("Oradea");
}); 
arad.addEventListener('click', function(){
    updateCity("Arad");
}); 
sibiu.addEventListener('click', function(){
    updateCity("Sibiu");
}); 