import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";

class ReactJSPractice extends Component{
    render(){
        return(
            <div className="container">
                <div className="title">QuizBee</div>
            </div>
        );
    }
}

ReactDOM.render(<ReactJSPractice/>, document.getElementById("root") );