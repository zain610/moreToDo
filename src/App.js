import React from "react";
import "./App.css";
import TodoList from "./Components/TodoList/TodoList";

import { connect } from "react-redux";
function App({ todos }) {
  console.log(todos);
  return (
    <div className="App">
      {todos.map((todoList, index) => {
        console.log(todoList);
        return <TodoList listId={index} key={index} todo={todoList} />;
      })}
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos.todos
});
export default connect(mapStateToProps)(App);
