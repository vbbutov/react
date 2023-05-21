import React from "react";
import { Header } from "./Header";
import './css/main.css'
export class App extends React.Component{
    helpText = 'help text!'
    inputClick (){
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
          <input placeholder={this.helpText} onClick={this.inputClick} onMouseOver={this.mouseOver} />
          <p>{this.helpText === 'help text!' ? 'Yes': 'No'}</p>
        </div>)
    }
  }