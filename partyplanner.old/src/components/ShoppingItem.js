import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteShopping, toggleCompleted } from "../actions/shopping/index";

class ShoppingItem extends Component {
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
          style={this.props.shopping.completed ? { color: "red" } : null}
        >
          {this.props.shopping.value}
        </h2>
        <button onClick={() => this.props.deleteShopping(this.props.index)}>
          Delete!
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { toggleCompleted, deleteShopping }
)(ShoppingItem);