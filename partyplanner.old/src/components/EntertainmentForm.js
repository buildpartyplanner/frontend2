import React, { Component } from "react";
import { connect } from "react-redux";
import { addEntertainment } from "../actions/entertainment/index";

class EntertainmentForm extends Component {
  constructor() {
    super();
    this.state = {
      entertainment: ""
    };
  }

  handleAdd = event => {
    event.preventDefault();
    this.props.addEntertainment({ value: this.state.entertainment, completed: false });
    this.setState({ entertainment: "" });
  };

  render() {
    return (
    
      <form onSubmit={this.handleAdd}>
        <input
          onChange={event => this.setState({ entertainment: event.target.value })}
          name="value"
          value={this.state.entertainment}
          placeholder="Enter Entertainment!"
        />
        <button>Submit!</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    entertainments: state.entertainments
  };
};

export default connect(
  mapStateToProps,
  { addEntertainment }
)(EntertainmentForm);