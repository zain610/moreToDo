import React from "react";
import Todo from "../Todo/Todo";
import Header from "../Todo/Header";
import { connect } from "react-redux";
import "../../App.css";

function TodoList({ listId, todo, inputValue, setDrag, X, Y, dragging }) {
  //ProTip: Use arrow functions over regular functions to bind _this. Else you need to manually bind this in the constructor
  // const removeTodo = id => {
  //   console.log("id", id);
  //   this.setState(state => ({
  //     todos: todos.filter(todo => todo.id !== id)
  //   }));
  // };

  //Clicks on list border - mousedown
  //get and record X and Y
  const onMouseDownHandler = e => {
    console.log("mouse down ", e.clientX, e.clientY)
    setDrag(true)
  };
  let draggingStyle = {
    left: `${X}px`,
    top: `${Y}px`
  }
  const filteredTodos = todo.filter(item => {
    return (
      item.title.toLowerCase().includes(inputValue) ||
      item.body.toLowerCase().includes(inputValue)
    );
  });
  return (
    <div style={draggingStyle} className="todoList" onMouseDown={onMouseDownHandler.bind(this)}>
      <Header listId={listId} inputValue={inputValue} />
      <hr />
      {filteredTodos.map((todo, i) => (
        <Todo listId={listId} key={i} todo={todo} index={i} />
      ))}
    </div>
  );
}

export default connect()(TodoList);
