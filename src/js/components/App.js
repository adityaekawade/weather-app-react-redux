
    import React from "react";
    import {render} from "react-dom";
    import SearchBar  from "../containers/SearchBar";
    import WeatherList from "../containers/WeatherList"

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
