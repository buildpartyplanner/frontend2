import React, { Component } from "react";
import ToDoForm from "./Components/ToDoForm";
import ToDoList from "./Components/ToDoList";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo List!</h1>
        <ToDoForm />
        <ToDoList />
      </div>
    );
  }
}

export default App;