import React, { useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo/Todo";
import Header from "./Todo/Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          title: "Hello",
          body: "Hello Everyone, welcome to my TED Talk what"
        },
        { id: 2, title: "What is this?", body: "GG all" }
      ],
      inputValue: ""
    };
    // this.removeTodo = this.removeTodo.bind(this);
  }
  //ProTip: Use arrow functions over regular functions to bind _this. Else you need to manually bind this in the constructor
  removeTodo = id => {
    console.log("id", id);
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  };
  todoFilterOnChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };
  addTodo = () => {
    //unshift the state todos
    //wait for user input -- title is important
    //save the todo
    let newTodo = {
      id: 3,
      title: "Enter title",
      body: "Enter Body"
    };
    this.setState(state => ({
      todos: [newTodo, ...state.todos]
    }));
  };

  render() {
    console.log(this.state.todos);
    const filteredTodos = this.state.todos.filter(todo => {
      return (
        todo.title.toLowerCase().includes(this.state.inputValue) ||
        todo.body.toLowerCase().includes(this.state.inputValue)
      );
    });

    return (
      <div
        className="App"
        style={{
          border: "0.2rem solid grey",
          borderTop: "0.75rem solid grey",
          borderRadius: "5px",
          width: "30%",
          margin: "1rem 30rem",
          alignContent: "center",
          backgroundColor: "#e9f5f7"
        }}
      >
        <Header
          inputValue={this.state.inputValue}
          todoFilterOnChange={this.todoFilterOnChange}
          addTodo={this.addTodo}
        />
        <hr />
        {filteredTodos.map(todo => (
          <Todo key={todo.id} removeTodo={this.removeTodo} todo={todo} />
        ))}
      </div>
    );
  }
}

export default App;
