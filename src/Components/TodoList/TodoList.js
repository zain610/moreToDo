import React, {useState} from "react";
import Todo from "../Todo/Todo";
import Header from "../Todo/Header";
import { connect } from "react-redux";
import "../../App.css";

function TodoList({ listId, todo, inputValue, setDrag, X, Y, moveList }) {
  console.log(X, Y)
  const [offSetX, setOffsetX] = useState(X)
  const [offSetY, setOffsetY] = useState(Y)
  const onMouseDownHandler = e => {
    console.log("mouse down ", e.clientX, e.clientY,listId)
    setDrag(true)
  };
  let finalListStyle = {
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
    <div style={finalListStyle} className="todoList" onMouseDown={onMouseDownHandler}>
      <Header listId={listId} inputValue={inputValue} />
      <hr />
      {filteredTodos.map((todo, i) => (
        <Todo listId={listId} key={i} todo={todo} index={i} />
      ))}
    </div>
  );
}

export default connect()(TodoList);
