/**
 * Created by Aditya Ekawade on 5/14/2017.
 */

import React from "react";
import {render} from "react-dom";
import {connect} from "react-redux";
import _ from "lodash";

import Chart from "./chart";


 class WeatherList extends React.Component {

     renderCurrentTemp(cityData) {
         console.log(cityData)
         console.log(cityData.clouds.all)
         console.log(cityData.main.temp)
         console.log("console for checking the weather object", cityData.weather.map((x) => x.description ));
         //console.log("icon value", cityData.weather.map((iconId) => iconId.icon ));


         const iconVal = cityData.weather.map((iconId) => iconId.icon );
         const ICON_URL = `http://openweathermap.org/img/w/${iconVal}.png`;
         console.log(ICON_URL);

         let displayTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

         let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
         let displayDay = days[new Date().getDay()];

         let tempInF = _.round((((cityData.main.temp)-273.15)*1.8)+32) ;

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
            <div style={divStyle} key={cityData.name}>
                <h2>{cityData.name}</h2>

                <br/>
                {displayDay} {displayTime}
                <br/>
                {cityData.weather.map((clouds) => clouds.description )}
                <br/>
                <br/>
                <img src={ICON_URL} height="100px" width="100px" />

                <h1 style={h1Style}>{tempInF}  &#8457;</h1>
               <br/>
                Humidity : {cityData.main.humidity} %
                <br/>
                Pressure : {cityData.main.pressure} hPa
                <br/>
                Wind: {cityData.wind.speed} Meter/second

            </div>
         )


     }

/*    renderData(cityData) {
        const temperature = cityData.list.map((weather) => weather.main.temp);
        const pressure = cityData.list.map((weather) => weather.main.pressure);

        return(
            <tr key={cityData.city.name}>
                <td>
                  {cityData.city.name}

                </td>
                <td>
                    <Chart data={temperature} unit="k" color="red"/>
                </td>
                <td>
                    <Chart data={pressure} color="orange"/>
                </td>

            </tr>
        )
    }*/



    render() {
        console.log("props in weatherlist", this.props.weather.map((x) => x.main.temp));
        return(
            <div>
{/*            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>

                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderData)}
                </tbody>

            </table>*/}
                <br/>
                {/*{this.props.weather.map((x) => x.main.temp)}*/}
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