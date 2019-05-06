import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Authenticate from './components/Authentication'
import './App.css';
import PartyForm from './components/PartyForm';
import Parties from './components/Parties';
import ShoppingForm from './components/ShoppingForm'
import TodoForm from './components/TodoForm'


const baseUrl = "https://arcane-bayou-55024.herokuapp.com/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: [],
    };
  }

  componentDidMount() {
   this.getparties()
  }

  getparties() {
    axios
    .get(`${baseUrl}//api/party/:id`)
    .then(res => 
      this.setState({
        parties: res.data
      }))

    .catch(err => console.log(err))

  }

  deleteParty = (ev, partyId) => {
    ev.preventDefault()
    axios.delete(`${baseUrl}/api/party/:id${partyId}`)
      .then(res => this.setState({
      parties: res.data
      }))
    .catch(err => console.log(err))
  }
  



  render() {
    return (
      <div className="App">
       
        <nav>
          <h1 className="header">Party Planner !!</h1>
        <div className="nav-links"> 
            <NavLink onClick={() => this.getparties()} to="/">Home!</NavLink>
            <NavLink exact to="/party-form">Add Party!</NavLink>
            <NavLink exact to="/shopping-form">Add Shopping!</NavLink>
            <NavLink exact to="/todo-form">Add To do List!</NavLink>
            
            

            
        </div>
        </nav>
        <Route exact path="/" render={props => <Parties {...props} getparties={this.getparties} parties={this.state.parties} baseUrl={baseUrl} deleteParty={this.deleteParty}/>} />

        <Route path="/party-form" render={props => <PartyForm {...props} baseUrl={baseUrl} parties={this.state.parties} getparties={this.getparties}/>}/>
        <Route path="/shopping-form" render={props => <ShoppingForm {...props} baseUrl={baseUrl} parties={this.state.parties} getparties={this.getparties}/>}/>
        <Route path="/todo-form" render={props => <TodoForm {...props} baseUrl={baseUrl} parties={this.state.parties} getparties={this.getparties}/>}/>
        
      </div>
    );
  }
}
export default Authenticate (App);