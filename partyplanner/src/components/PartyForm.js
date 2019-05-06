import React, { Component } from 'react';
import axios from 'axios';



class PartyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      guests: "",
      theme: "",
      date: "",
      
    };
  }

  addParty = event => {
    event.preventDefault();
    // add code to create the smurf using the api

    
    axios
      .post(`${this.props.baseUrl}//api/party/:id`, this.state)
      .then(res => {
        this.setState({
          guests: "",
          theme: "",
          date: "",
          budget:"",
          board: "",
          
        })
        { this.props.addPartiess() }
        this.props.history.push("/");
      })

      .catch (err =>
    console.log(err))
  }
 
  handleInputChange = e => {
    this.setState({ [e.target.guests]: e.target.value });
  };
  render() {
    return (
      <div className="PartyForm">
        <form onSubmit={this.addParty}>
          <input
            onChange={this.handleInputChange}
            placeholder="guest"
            value={this.state.guest}
            guests="guest"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="theme"
            value={this.state.theme}
            guests="theme"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="date"
            value={this.state.date}
            guests="date"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="budget"
            value={this.state.budget}
            guests="budget"
          />
        
          <button type="submit" className="button">Add Party!</button>
        </form>
      </div>
    );
  }
}
export default PartyForm;