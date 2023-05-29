import React from "react"
import User from "./User"

class Users extends React.Component{
    // users = [{id:1, name: 'Вадим', age:40},{id:2, name: 'Мария', age:39},{id:3, name: 'Виктор', age:20}]
    // users = this.props.users
    render(){
        if(this.props.users.length > 0)
                return(
                    <div className="user"> 
                        {this.props.users.map((el) => (<User onDelete={this.props.onDelete} user={el}  key={el.id} />))}
                    </div>
                )
                else return(<div>Пользователей нет</div>)
                }
      
  }
export default Users