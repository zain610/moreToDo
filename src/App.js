import React, { useState } from "react";
import "./App.css";
import TodoList from "./Components/TodoList/TodoList";

import { connect } from "react-redux";
function App({ lists }) {
  console.log(lists);
  const [dragging, setDrag] = useState(false)
  const [X, setX] = useState(0)
  const [Y, setY] = useState(0)
  const [listPosition, setListPosition] = useState([{listId: 0, X: 0, Y:100}, {listId: 1, X: 400, Y: 100}])
  const [moveList, selectList] = useState(0)
  const onMouseMoveHandle = (e) => {
    if(dragging){
      console.log("moving", e.clientX, e.clientY)
      let newState = [...listPosition]
      newState[moveList] = {
        listId:moveList,
        X: e.clientX-150,
        Y: e.clientY
      }
      setListPosition(newState)
      setX(e.clientX-150)
      setY(e.clientY)
    }
  }
  console.log(listPosition)
  const onMouseUpHandler = e => {
    console.log("mouse up", X, Y)
    setDrag(false)
    
  }
  return (
    <div className="App" onMouseMove={onMouseMoveHandle} onMouseUp={onMouseUpHandler}>
      {lists.map((todoList, index) => {
        const { id, header, todos, inputValue } = todoList;
        console.log("todos", todos)
        return (
          <TodoList
            inputValue={inputValue}
            listId={index}
            key={id}
            todo={todos}
            setDrag={setDrag}
            listPosition={listPosition[index]}
            dragging={dragging}
            selectList = {selectList}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => ({
  lists: state.list.list
});
export default connect(mapStateToProps)(App);
