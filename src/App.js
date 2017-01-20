import React, { Component } from 'react';
import './App.css';
import { AddToDo } from './Containers';
import { ToDoList } from './Components';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
              <h1>Todo</h1>
          </div>
          <AddToDo />
          <ToDoList toDos={[]} onTodoClick={ () => console.log("Uhh") }/>
      </div>
    );
  }
}

export default App;
