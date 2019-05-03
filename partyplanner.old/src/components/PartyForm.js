import React, { Component } from "react";
import { connect } from "react-redux";
import { addparty } from "../actions/party/index";

class PartyForm extends Component {
  constructor() {
    super();
    this.state = {
      party: ""
    };
  }

  handleAdd = event => {
    event.preventDefault();
    this.props.addparty({ value: this.state.party, completed: false });
    this.setState({ party: "" });
  };

  render() {
    return (
      
      <form onSubmit={this.handleAdd}>
        <input
          onChange={event => this.setState({ party: event.target.value })}
          name="value"
          value={this.state.party}
          placeholder="Enter Something party!"
        />
        <button>Submit</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    parties: state.parties
  };
};

export default connect(
  mapStateToProps,
  { addparty }
)(PartyForm);