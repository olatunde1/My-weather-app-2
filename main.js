// get all necessary elements from the DOM
const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const icon = document.querySelector('.icon');
const cloudOutput = document.querySelector('.cloud');
const humidityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.getElementById('.locationInput');
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelector('.city');


// default city when the page loads

let cityInput = "London";

// add click event to every city in the panel

cities.forEach((city) => {
    city.addEventListener('click', (e) =>{

        // change from default city to the clicked one

        city.input = e.target.innerHTML;

        /*function that fetches and displays 
        all the data from the weather API (we will write it soon)*/


        fetchWeatherData();

        // fade out the app(simple animation)

        app.getElementsByClassName.opacity = "0";


    })
})

// Add submit event to the form

form.addEventListener('submit', (e) => {

    /* if the input field (search bar)
    is empty, throw an alert*/

    if (search.ariaValueMax.length == 0){
        alert('Please type in a city name');
    }else{

    /* change from default city to 
    the one written in the input field*/

    cityInput = search.value;

    /*function that fetches and displays 
    all the data from the weather API (we will write it soon)*/

    fetchWeatherData();

    //remove all text from the input field
    search.value = "";

    // fade out the app (simple animation)

    }

    // Prevents the default behaviour of the form

    e.preventDefault();

});

/*function that returns a day of the week
(Monday,Tuesday,Friday....) from a date(12 03 2021)
we will use this function later*/

function dayOfTheWeek(day, month, year){

    const weekday =[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday", 
        "Saturday"
    ];

    return weekday[new Date(`${day}/${month}/${year}`).getDay()];
};

/*Function that fetchec and displays the data from the weather API*/

function fetchWeatherData(){
    
}





