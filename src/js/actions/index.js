/**
 * Created by Aditya Ekawade on 5/13/2017.
 */

// npm install --save redux-promise
// npm install --save axios  --> for ajax requests
//npm install --save react-sparklines
// npm i --save lodash
// npm install --save react-time



//Redux promise is a middleware and it has got the power to block or manipulate the action before it reaches the reducer


import axios from "axios";

const API_KEY = "25430016d98e42aa63ccbfe5523f0ed1";

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


const CURRENT_WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log("Request", request);

    return {
        type: "FETCH_WEATHER",
        payload: request
    }
}

export function fetchCurrentWeather(city) {
    const url = `${CURRENT_WEATHER_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log("Request", request);

    return {
        type: "FETCH_CURRENT_WEATHER",
        payload: request
    }
}