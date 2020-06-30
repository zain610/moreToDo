import React, { useState } from "react";
import Todo from "../Todo/Todo";
import Header from "../Todo/Header";
import { connect } from "react-redux";
import "../../App.css";

function TodoList({
  listId,
  todoList,
  setDrag,
  selectList,
  listPosition
}) {
  const {todos, inputValue } = todoList;
  const onMouseDownHandler = e => {
    console.log("mouse down ", e.clientX, e.clientY, listId);
    setDrag(true);
    selectList(listId);
  };
  let finalListStyle = {
    left: `${listPosition.X}px`,
    top: `${listPosition.Y}px`
  };
  const filteredTodos = todos.filter(item => {
    return (
      item.title.toLowerCase().includes(inputValue) ||
      item.body.toLowerCase().includes(inputValue)
    );
  });
  return (
    <div
      style={finalListStyle}
      className="todoList"
      onMouseDown={onMouseDownHandler}
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
