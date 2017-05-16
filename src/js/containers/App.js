
    import React from "react";
    import {render} from "react-dom";
    import SearchBar  from "../components/SearchBar";
    import WeatherList from "../components/WeatherList"

     class App extends React.Component {


        render() {
            return (
               <div className = "container">
                   <SearchBar/>
                    <WeatherList/>
                </div>

            );
        }

    }

    export default App;
