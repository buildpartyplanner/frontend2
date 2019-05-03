import React, { Component } from "react";
import './App.css';
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import EntertainmentList from './components/EntertainmentList';
import EntertainmentForm from './components/EntertainmentForm';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';
class App extends Component {
  render() {
    return (
      <div>
        <ToDoList />
        <ToDoForm />
        
        <EntertainmentList />
        <EntertainmentForm />
        
        <ShoppingList />
        <ShoppingForm />
        
      </div>
      
    );
  }
}

export default App;