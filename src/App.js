import React, { useCallback, useEffect } from "react";
import "./App.css";
import Todo from "./Components/Todo/Todo";
import Header from "./Components/Todo/Header";
import { addTodo } from "./actions/actions";

import { connect } from "react-redux";
function App({ dispatch, todos, inputValue }) {
  //ProTip: Use arrow functions over regular functions to bind _this. Else you need to manually bind this in the constructor
  // const removeTodo = id => {
  //   console.log("id", id);
  //   this.setState(state => ({
  //     todos: todos.filter(todo => todo.id !== id)
  //   }));
  // };
  const filteredTodos = todos.filter(item => {
    return (
      item.title.toLowerCase().includes(inputValue) ||
      item.body.toLowerCase().includes(inputValue)
    );
  });
  return (
    <div className="App">
      <Header inputValue={inputValue} />
      <hr />
      {}
      {filteredTodos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
  inputValue: state.todos.inputValue
});
export default connect(mapStateToProps)(App);
