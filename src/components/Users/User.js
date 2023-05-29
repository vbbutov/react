import React from "react"
import {IoCloseCircleSharp} from 'react-icons/io5'
class User extends React.Component{
    user = this.props.user
    render(){
      return(
        <div>
            <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)}/>
            <h3>{this.user.name}  {this.user.age}</h3>
        </div>
      )
    }
  }
export default User