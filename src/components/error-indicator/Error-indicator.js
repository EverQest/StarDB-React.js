import React, { Component } from "react";
import './Error-indicator.css'
export default class ErrorIndicator extends Component {

render(){
    return(
        <div className="error_container">
        <div className="error_title">OOPSS...</div>
        <div className="error_title_two">something went wrong</div>
        </div>
    )
}

}
