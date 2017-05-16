/**
 * Created by Aditya Ekawade on 5/13/2017.
 */


import React from "react";
import {render} from "react-dom";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import * as FetchActionCreators from "../actions/index";
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: ''} ;
        this.changeInput = this.changeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showCurrentWeather = this.showCurrentWeather.bind(this);
    }



    changeInput(e) {
        console.log(e.target.value);
        this.setState({text: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.fetchWeather(this.state.text);
        //this.setState({text: ''});
    }


    showCurrentWeather() {
        this.props.fetchCurrentWeather(this.state.text);
    }

    render() {
        return(
           <div className="container">
               <form className="input-group" onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="search city"
                               value={this.state.text} onChange={this.changeInput}
                        />
                       <span className="input-group-btn">
                           <button className="btn btn-primary" type="submit">Search </button>
                       </span>

               </form>
               <br/>
               <button onClick={this.showCurrentWeather} className="btn btn-default" >Current weather</button>

           </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(FetchActionCreators, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);