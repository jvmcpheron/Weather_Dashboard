const apiKey = '59d51aff817d40719e5231234220807';
const baseWeatherUrl = 'http://api.weatherapi.com/v1';
let city = "Chicago"
const searchBtn = document.getElementsByClassName('search')[0];
let suggestedOne = "No City Yet";
let suggestedTwo = "No City Yet";
let suggestedThree = "No City Yet";



document.getElementById('city-one').textContent = localStorage.getItem('suggestedOne');
document.getElementById('city-two').textContent = localStorage.getItem('suggestedTwo');
document.getElementById('city-three').textContent = localStorage.getItem('suggestedThree');


document.getElementById("city").innerHTML = city

let forecastData = {};

var getData = fetch(`http://api.weatherapi.com/v1/forecast.json?key=59d51aff817d40719e5231234220807&q=${city}&days=7`)
  .then(function(response) {
    if (response.ok) {
        return response.json();
    }
  })
  .then (function(data) {
    console.log(data);
    document.getElementById("city").innerHTML = city
    document.getElementById("main-temp").innerHTML = data.current.temp_f;
    document.getElementById("main-wind").innerHTML = data.current.gust_mph;
    document.getElementById("main-hum").innerHTML = data.current.humidity;
    document.getElementById("temp-two").innerHTML = data.forecast.forecastday[1].day.avgtemp_f;
    document.getElementById("wind-two").innerHTML = data.forecast.forecastday[1].day.maxwind_mph;
    document.getElementById("hum-two").innerHTML = data.forecast.forecastday[1].day.avghumidity;
    document.getElementById("temp-three").innerHTML = data.forecast.forecastday[2].day.avgtemp_f;
    document.getElementById("wind-three").innerHTML = data.forecast.forecastday[2].day.maxwind_mph;
    document.getElementById("hum-three").innerHTML = data.forecast.forecastday[2].day.avghumidity;

  });

getData

searchBtn.addEventListener("click" , ()=>{
    city = document.getElementById("citySearch").value;
    if (city === localStorage.getItem('suggestedOne')){
        console.log("already top result");
    }else if (localStorage.getItem('suggestedOne') === "No City Yet"){
            suggestedOne = city;
    }else if (localStorage.getItem('suggestedTwo') === "No City Yet"){
        suggestedTwo = suggestedOne;
        suggestedOne = city;
    }else {
        if (city === localStorage.getItem('suggestedTwo')){
            suggestedTwo = suggestedOne;
            suggestedOne = city;
        } else {
            suggestedThree = suggestedTwo;
            suggestedTwo = suggestedOne;
            suggestedOne = city;
        }

    }
        
      localStorage.setItem('suggestedOne' , suggestedOne);
      localStorage.setItem('suggestedTwo' , suggestedTwo);
      localStorage.setItem('suggestedThree' , suggestedThree);

      document.getElementById('city-one').textContent = localStorage.getItem('suggestedOne');
document.getElementById('city-two').textContent = localStorage.getItem('suggestedTwo');
document.getElementById('city-three').textContent = localStorage.getItem('suggestedThree');

    document.getElementById("city").innerHTML = city
    console.log(city);
    getData = fetch(`http://api.weatherapi.com/v1/forecast.json?key=59d51aff817d40719e5231234220807&q=${city}&days=7`)
  .then(function(response) {
    if (response.ok) {
        return response.json();
    }
  })
  .then (function(data) {
    console.log(data);
    document.getElementById("city").innerHTML = city
    document.getElementById("main-temp").innerHTML = data.current.temp_f;
    document.getElementById("main-wind").innerHTML = data.current.gust_mph;
    document.getElementById("main-hum").innerHTML = data.current.humidity;
    document.getElementById("temp-two").innerHTML = data.forecast.forecastday[1].day.avgtemp_f;
    document.getElementById("wind-two").innerHTML = data.forecast.forecastday[1].day.maxwind_mph;
    document.getElementById("hum-two").innerHTML = data.forecast.forecastday[1].day.avghumidity;
    document.getElementById("temp-three").innerHTML = data.forecast.forecastday[2].day.avgtemp_f;
    document.getElementById("wind-three").innerHTML = data.forecast.forecastday[2].day.maxwind_mph;
    document.getElementById("hum-three").innerHTML = data.forecast.forecastday[2].day.avghumidity;

    


  });



  
});



//suggested search call

document.getElementById('city-one').addEventListener("click" , ()=>{
    city = localStorage.getItem('suggestedOne');
    

    document.getElementById("city").innerHTML = city
    console.log(city);
    getData = fetch(`http://api.weatherapi.com/v1/forecast.json?key=59d51aff817d40719e5231234220807&q=${city}&days=7`)
  .then(function(response) {
    if (response.ok) {
        return response.json();
    }
  })
  .then (function(data) {
    console.log(data);
    document.getElementById("city").innerHTML = city
    document.getElementById("main-temp").innerHTML = data.current.temp_f;
    document.getElementById("main-wind").innerHTML = data.current.gust_mph;
    document.getElementById("main-hum").innerHTML = data.current.humidity;
    document.getElementById("temp-two").innerHTML = data.forecast.forecastday[1].day.avgtemp_f;
    document.getElementById("wind-two").innerHTML = data.forecast.forecastday[1].day.maxwind_mph;
    document.getElementById("hum-two").innerHTML = data.forecast.forecastday[1].day.avghumidity;
    document.getElementById("temp-three").innerHTML = data.forecast.forecastday[2].day.avgtemp_f;
    document.getElementById("wind-three").innerHTML = data.forecast.forecastday[2].day.maxwind_mph;
    document.getElementById("hum-three").innerHTML = data.forecast.forecastday[2].day.avghumidity;

    


  });



  
})
document.getElementById('city-two').addEventListener("click" , ()=>{
    city = localStorage.getItem('suggestedTwo');
    

    document.getElementById("city").innerHTML = city
    console.log(city);
    getData = fetch(`http://api.weatherapi.com/v1/forecast.json?key=59d51aff817d40719e5231234220807&q=${city}&days=7`)
  .then(function(response) {
    if (response.ok) {
        return response.json();
    }
  })
  .then (function(data) {
    console.log(data);
    document.getElementById("city").innerHTML = city
    document.getElementById("main-temp").innerHTML = data.current.temp_f;
    document.getElementById("main-wind").innerHTML = data.current.gust_mph;
    document.getElementById("main-hum").innerHTML = data.current.humidity;
    document.getElementById("temp-two").innerHTML = data.forecast.forecastday[1].day.avgtemp_f;
    document.getElementById("wind-two").innerHTML = data.forecast.forecastday[1].day.maxwind_mph;
    document.getElementById("hum-two").innerHTML = data.forecast.forecastday[1].day.avghumidity;
    document.getElementById("temp-three").innerHTML = data.forecast.forecastday[2].day.avgtemp_f;
    document.getElementById("wind-three").innerHTML = data.forecast.forecastday[2].day.maxwind_mph;
    document.getElementById("hum-three").innerHTML = data.forecast.forecastday[2].day.avghumidity;

    


  });



  
})
document.getElementById('city-three').addEventListener("click" , ()=>{
    city = localStorage.getItem('suggestedThree');
    

    document.getElementById("city").innerHTML = city
    console.log(city);
    getData = fetch(`http://api.weatherapi.com/v1/forecast.json?key=59d51aff817d40719e5231234220807&q=${city}&days=7`)
  .then(function(response) {
    if (response.ok) {
        return response.json();
    }
  })
  .then (function(data) {
    console.log(data);
    document.getElementById("city").innerHTML = city
    document.getElementById("main-temp").innerHTML = data.current.temp_f;
    document.getElementById("main-wind").innerHTML = data.current.gust_mph;
    document.getElementById("main-hum").innerHTML = data.current.humidity;
    document.getElementById("temp-two").innerHTML = data.forecast.forecastday[1].day.avgtemp_f;
    document.getElementById("wind-two").innerHTML = data.forecast.forecastday[1].day.maxwind_mph;
    document.getElementById("hum-two").innerHTML = data.forecast.forecastday[1].day.avghumidity;
    document.getElementById("temp-three").innerHTML = data.forecast.forecastday[2].day.avgtemp_f;
    document.getElementById("wind-three").innerHTML = data.forecast.forecastday[2].day.maxwind_mph;
    document.getElementById("hum-three").innerHTML = data.forecast.forecastday[2].day.avghumidity;

    


  });



  
})