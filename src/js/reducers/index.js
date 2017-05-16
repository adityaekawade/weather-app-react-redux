/**
 * Created by Aditya Ekawade on 5/14/2017.
 */


import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
    weather: WeatherReducer,

});

export default rootReducer;