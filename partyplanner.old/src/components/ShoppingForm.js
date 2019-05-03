import React, { Component } from "react";
import { connect } from "react-redux";
import { addShopping } from "../actions/shopping/index";

class ShoppingForm extends Component {
  constructor() {
    super();
    this.state = {
      shopping: ""
      
    };
    this.state= {
      price:""
    }
  }

  handleAdd = event => {
    event.preventDefault();
    this.props.addShopping({ value: this.state.shopping, completed: false });
    this.setState({ shopping: "" });
    this.setState({ price: ""});
  };

  render() {
    return (
    
      <form onSubmit={this.handleAdd}>
        <input
          onChange={event => this.setState({ shopping: event.target.value })}
          name="value"
          value={this.state.shopping}
          placeholder="Enter shopping item!"
        />
        <input
          onChange={event => this.setState({ price: event.target.value })}
          name="value"
          value={this.state.price}
          placeholder="Enter Price!"
        />
        <button>Submit!</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    shoppings: state.shoppingreducer.shoppings
    
    
  };
};

export default connect(
  mapStateToProps,
  { addShopping }
)(ShoppingForm);