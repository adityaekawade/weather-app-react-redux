/**
 * Created by Aditya Ekawade on 5/14/2017.
 */

import React from "react";
import {render} from "react-dom";
import {connect} from "react-redux";
import _ from "lodash";



 class WeatherList extends React.Component {

     renderCurrentTemp(data) {
         console.log(data)
         console.log(data.clouds.all)
         console.log(data.main.temp)
         console.log("console for checking the weather object", data.weather.map((x) => x.description ));
         //console.log("icon value", data.weather.map((iconId) => iconId.icon ));


         const iconVal = data.weather.map((iconId) => iconId.icon );
         const ICON_URL = `http://openweathermap.org/img/w/${iconVal}.png`;
         console.log(ICON_URL);

         let displayTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

         let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
         let displayDay = days[new Date().getDay()];

         let tempInF = _.round((((data.main.temp)-273.15)*1.8)+32) ;

         let h1Style = {
             display: "inline"
         }

         let divStyle = {
             margin: "auto",
             border: "ridge",
             padding: "40px",
             width: "600px",
             boxShadow: "3px 3px 3px #888888",
             margin: "10px"
         }


         return (
            <div style={divStyle} key={data.name}>
                <h2>{data.name}</h2>

                <br/>
                {displayDay} {displayTime}
                <br/>
                {data.weather.map((clouds) => clouds.description )}
                <br/>
                <br/>
                <img src={ICON_URL} height="100px" width="100px" />

                <h1 style={h1Style}>{tempInF}  &#8457;</h1>
               <br/>
                Humidity : {data.main.humidity} %
                <br/>
                Pressure : {data.main.pressure} hPa
                <br/>
                Wind: {data.wind.speed} Meter/second

            </div>
         )


     }


    render() {
        return(
            <div>
                <br/>
                {this.props.weather.map(this.renderCurrentTemp)}
            </div>
        );
    }
}


function mapStateToProps(state) {
    console.log(state);
    return {

        weather: state.weather
    }
}

export default connect(mapStateToProps, null)(WeatherList);