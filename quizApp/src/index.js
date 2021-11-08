import React, {Component} from "react";
import ReactDOM from "react-dom";
import quizService from "./quizService";
import "./assets/style.css";

class ReactJSPractice extends Component{
    state ={
        questionBank : []
    };
    getQuestions = () =>{
        quizService().then(question => {
            this.setState({
                questionBank: question
            });
        });
    };
    componentDidMount(){
        this.getQuestions();
    }
    render(){
        return(
            <div className="container">
                <div className="title">QuizBee</div>
                {this.state.questionBank.length > 0 && this.state.questionBank.map(({question,answers,
                correct, questionId}) => (<h4>{question}</h4>))}
            </div>
        );
    }
}

ReactDOM.render(<ReactJSPractice/>, document.getElementById("root") );
