import React from "react";
import "./App.css";
import TodoList from "./Components/TodoList/TodoList";

import { connect } from "react-redux";
function App({ lists }) {
  console.log(lists);
  return (
    <div className="App">
      {lists.map(todoList => {
        const { id, header, todos } = todoList;
        return <TodoList listId={id} key={id} todo={todos} />;
      })}
    </div>
  );
}

const mapStateToProps = state => ({
  lists: state.list.list
});
export default connect(mapStateToProps)(App);
