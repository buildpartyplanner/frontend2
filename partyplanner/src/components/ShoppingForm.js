import React, { Component } from "react";
import { connect } from "react-redux";
import { addToDo } from "../actions/shopping/index";

class ToDoForm extends Component {
  constructor() {
    super();
    this.state = {
      todo: ""
      
    };
    this.state= {
      price:""
    }
  }

  handleAdd = event => {
    event.preventDefault();
    this.props.addToDo({ value: this.state.todo, completed: false });
    this.setState({ todo: "" });
    this.setState({ price: ""});
  };

  render() {
    return (
    
      <form onSubmit={this.handleAdd}>
        <input
          onChange={event => this.setState({ todo: event.target.value })}
          name="value"
          value={this.state.todo}
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
    todos: state.todos
    
    
  };
};

export default connect(
  mapStateToProps,
  { addToDo }
)(ToDoForm);