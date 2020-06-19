import React, { useState } from "react";
import "./App.css";
import TodoList from "./Components/TodoList/TodoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import * as actions from "./actions/actions";

function App({ todos, dispatch, lists }) {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

  const onAddListHandler = () => {
    console.log("handling add list button click");
    // TODO complete this action
    dispatch(actions.addList({}));
  };
  const onHandleListDrag = e => {
    console.log("dragging", e.clientX, e.clientY);
    setX(e.clientX);
    setY(e.clientY);
  };
  return (
    <div className="App" onDrag={onHandleListDrag}>
      {lists.map((todoList, index) => {
        const { id, header, todos, inputValue } = todoList;

        return (
          <TodoList
            inputValue={inputValue}
            listId={index}
            key={id}
            todo={todos}
            X={X}
            Y={Y}
          />
        );
      })}
      <div
        class="addTodoList-btn"
        style={{
          display: "float",
          background: "beige",
          height: "max-content",
          borderRadius: "50px",
          position: "absolute",
          bottom: "1%",
          right: "1%"
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
