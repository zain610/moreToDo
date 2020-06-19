import React, { useState } from "react";
import Todo from "../Todo/Todo";
import Header from "../Todo/Header";
import { connect } from "react-redux";
import "../../App.css";

function TodoList({ listId, todo, inputValue, X = 0 }) {
  let draggingStyle = {
    position: "absolute",
    transform: `transform(${X}px)`
  };
  const onMouseDownHandler = e => {
    console.log(e.clientX, e.clientY);
  };
  const filteredTodos = todo.filter(item => {
    return (
      item.title.toLowerCase().includes(inputValue) ||
      item.body.toLowerCase().includes(inputValue)
    );
  });
  return (
    <div
      draggable
      style={draggingStyle}
      className="todoList"
      onClick={onMouseDownHandler}
    >
      <Header listId={listId} inputValue={inputValue} />
      <hr />
      {filteredTodos.map((todo, i) => (
        <Todo listId={listId} key={i} todo={todo} index={i} />
      ))}
    </div>
  );
}

export default connect()(TodoList);
