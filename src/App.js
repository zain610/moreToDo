import React from "react";
import "./App.css";
import TodoList from "./Components/TodoList/TodoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import * as actions from "./actions/actions";

function App({ todos, dispatch, lists }) {
  const onAddListHandler = () => {
    console.log("handling add list button click");
    dispatch(actions.addList({}));
  };
  return (
    <div className="App">
      {lists.map((todoList, index) => {
        const { id, header, todos, inputValue } = todoList;
        return (
          <TodoList
            inputValue={inputValue}
            listId={index}
            key={id}
            todo={todos}
          />
        );
      })}
      <div
        class="addTodoList-btn"
        style={{
          display: "float",
          background: "white",
          height: "max-content",
          borderRadius: "50px"
        }}
      >
        <FontAwesomeIcon
          onClick={onAddListHandler}
          style={{
            fontSize: "2rem",
            padding: "10px",
            color: "mediumpurple"
          }}
          icon={faPlus}
        />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todo.list,
    lists: state.todo.list
  };
};
export default connect(mapStateToProps)(App);
