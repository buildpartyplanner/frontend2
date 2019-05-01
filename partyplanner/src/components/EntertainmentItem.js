import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteEntertainment, toggleCompleted } from "../actions/entertainment/index";

class EntertainmentItem extends Component {
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
          style={this.props.entertainment.completed ? { color: "red" } : null}
        >
          {this.props.entertainment.value}
        </h2>
        <button onClick={() => this.props.deleteEntertainment(this.props.index)}>
          Delete!
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { toggleCompleted, deleteEntertainment }
)(EntertainmentItem);