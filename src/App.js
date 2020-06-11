import React from "react";
import "./App.css";
import TodoList from "./Components/TodoList/TodoList";

import { connect } from "react-redux";
function App({ lists, dispatch }) {
  console.log(lists);
  return (
    <div className="App">
      {lists.map((todoList, index) => {
        const { id, header, todos, inputValue } = todoList;
        console.log("todos", todos)
        return (
          <TodoList
            inputValue={inputValue}
            listId={index}
            key={id}
            todo={todos}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => ({
  lists: state.todo.list
});
export default connect(mapStateToProps)(App);
