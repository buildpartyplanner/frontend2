import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteParty, toggleCompleted } from "../actions/party/index";

class PartyItem extends Component {
  constructor(props) {
    super(props);
  }

  handleToggleCompleted = () => {
    this.props.toggleCompleted(this.props.index);
  };

  render() {
    return (
      <div>
        <h2
          onClick={this.handleToggleCompleted}
          style={this.props.party.completed ? { color: "red" } : null}
        >
          {this.props.party.value}
        </h2>
        <button onClick={() => this.props.deleteParty(this.props.index)}>
          Delete!
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { toggleCompleted, deleteParty }
)(PartyItem);