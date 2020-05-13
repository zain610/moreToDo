import React, { useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo/Todo";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          title: "Hello",
          body: "Hello Everyone, welcome to my TED Talk"
        },
        { id: 2, title: "What is this?", body: "GG all" }
      ]
    };
    this.removeTodo = this.removeTodo.bind(this);
  }
  removeTodo(id) {
    console.log("id", id);
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  }
  render() {
    return (
      <div
        className="App"
        style={{
          border: "0.2rem solid black",
          width: "30%",
          margin: "1rem 30rem",
          alignContent: "center",
          backgroundColor: "#e9f5f7"
        }}
      >
        {this.state.todos.map(todo => (
          <Todo key={todo.id} removeTodo={this.removeTodo} todo={todo} />
        ))}
      </div>
    );
  }
}

export default App;
