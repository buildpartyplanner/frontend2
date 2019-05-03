import React, { Component } from "react";
import { connect } from "react-redux";
import ShoppingItem from "./ShoppingItem";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.shoppings.map((shopping, index) => (
          <ShoppingItem key={index} shopping={shopping} index={index} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shoppings: state.shoppingreducer.shoppings
  };
};

export default connect(mapStateToProps)(ShoppingList);