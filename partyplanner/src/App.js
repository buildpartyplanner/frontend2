import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Authenticate from './components/Authentication'
import './App.css';
import PartyForm from './components/PartyForm';
import Parties from './components/Parties';
import ShoppingForm from './components/ShoppingForm'


const baseUrl = "http://localhost:3333";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
   this.getSmurfs()
  }

  getSmurfs() {
    axios
    .get(`${baseUrl}/smurfs`)
    .then(res => 
      this.setState({
        smurfs: res.data
      }))

    .catch(err => console.log(err))

  }

  deleteSmurf = (ev, smurfId) => {
    ev.preventDefault()
    axios.delete(`${baseUrl}/smurfs/${smurfId}`)
      .then(res => this.setState({
      smurfs: res.data
      }))
    .catch(err => console.log(err))
  }
  


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
       
        <nav>
          <h1 className="header">Party Planner!!</h1>
        <div className="nav-links"> 
            <NavLink onClick={() => this.getSmurfs()} to="/">Party Planner!</NavLink>
            <NavLink exact to="/smurf-form">Add Party</NavLink>
            <NavLink exact to="/TodoFunctionality">Add To do List</NavLink>
            <NavLink exact to="/ShoppingForm">Add Shopping List!</NavLink>

            
        </div>
        </nav>
        <Route exact path="/" render={props => <Parties {...props} getSmurfs={this.getSmurfs} smurfs={this.state.smurfs} baseUrl={baseUrl} deleteSmurf={this.deleteSmurf}/>} />

        <Route path="/smurf-form" render={props => <PartyForm {...props} baseUrl={baseUrl} smurfs={this.state.smurfs} getSmurfs={this.getSmurfs}/>}/>
        
        
      </div>
    );
  }
}
export default Authenticate (App);