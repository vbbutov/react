import React from "react";
import { Header } from "./Header";
import './css/main.css'
export class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      helpText: 'help text!',
      userData: "",
    }
    this.inputClick = this.inputClick.bind(this)
  }
    // helpText = 'help text!'
    inputClick (){
      this.setState({helpText: "Changed"})
      console.log('input click');
    }
    mouseOver (){
      console.log('mouse over');
    }
    render(){
      return  (
        <div>
          <Header title="Это шапка сайта" />
          <Header title="!!!!!" />
          <h1>{this.state.helpText}</h1>
          <h2>{this.state.userData}</h2>
          <input 
          onChange={event => this.setState({userData: event.target.value})}
          placeholder={this.state.helpText} onClick={this.inputClick} onMouseOver={this.mouseOver} />
          <p>{this.state.helpText === 'help text!' ? 'Yes': 'No'}</p>
        </div>)
    }
  }