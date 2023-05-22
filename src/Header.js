import React from "react"
import Button from './Button'
export class Header extends React.Component{
    render(){
      return(
      <header>{this.props.title}
      <Button text="MY BUTTON"/>  
      <Button />  
     </header>)
    }
  }