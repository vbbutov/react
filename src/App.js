import React from "react";
import { Header } from "./components/Header";
import Users from "./components/Users/Users";
import './css/main.css'
import AddUser from "./components/Users/AddUser";
export class App extends React.Component{
  constructor(props){
      super(props)
      this.state = {
          users :[{id:1, name: 'Вадим', age:40},{id:2, name: 'Мария', age:39},{id:3, name: 'Виктор', age:20}]
      }
      this.addUser = this.addUser.bind(this)
      this.deleteUser = this.deleteUser.bind(this)
  }
    render(){
      return  (
        <div>
          <Header title="Список пользователей" />
          <main>
            <Users users={this.state.users}  onDelete={this.deleteUser}></Users>
          </main>
          <aside>
            <AddUser onAdd={this.addUser}/>
          </aside>
        </div>)
    }
    deleteUser(id){
      this.setState({
        users: this.state.users.filter(e => e.id !== id)
      })
    }
    addUser(user){
      // console.log('add', user);
      const id = this.state.users.length + 1
      this.setState({users: [...this.state.users, {id, ...user}]})
      console.log('user', this.state.users);
    }
  }