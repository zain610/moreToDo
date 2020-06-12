import React, {useState} from "react";
import Todo from "../Todo/Todo";
import Header from "../Todo/Header";
import { connect } from "react-redux";
import "../../App.css";

function TodoList({ listId, todo, inputValue, setDrag, X, Y, dragging }) {
  const [offSetX, setOffsetX] = useState(0)
  const [offSetY, setOffsetY] = useState(0)
  const onMouseDownHandler = e => {
    console.log("mouse down ", e.clientX, e.clientY)
    setDrag(true)
    document.querySelector(".App").addEventListener("mouseup", onMouseUpHandler)
  };
  const onMouseUpHandler = e => {
    console.log("mouse up", X, Y)
    setDrag(false)
    if(dragging === false) {
      setOffsetX(e.clientX)
      setOffsetY(e.clientY)
    }
    document.querySelector(".App").removeEventListener("mouseup", onMouseUpHandler)
  }
  const onMouseMoveHandle = e => {
    if(dragging){
      console.log("moving", e.clientX, e.clientY)
      setOffsetX(e.clientX)
      setOffsetY(e.clientY)
    }
  }
  let finalListStyle = {
    left: `${offSetX}px`,
    top: `${offSetY}px`
  }
  let draggingStyle= {
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
    <div style={finalListStyle} className="todoList" onMouseDown={onMouseDownHandler.bind(this)} onMouseUp={onMouseUpHandler} onMouseMove={onMouseMoveHandle}>
      <Header listId={listId} inputValue={inputValue} />
      <hr />
      {filteredTodos.map((todo, i) => (
        <Todo listId={listId} key={i} todo={todo} index={i} />
      ))}
    </div>
  );
}

export default connect()(TodoList);
