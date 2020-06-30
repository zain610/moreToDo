import React, { useState } from "react";
import "./App.css";
import TodoList from "./Components/TodoList/TodoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import * as actions from "./actions/actions";

/***
 * TODO:
 * 1. Fix the drag and drop
 * 2. Add list functionality
 * 3.
 *
 *
 */

function App({ todos, dispatch, lists }) {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
//shift this to a action-reducer
  const onAddListHandler = () => {
    console.log("handling add list button click");
    // TODO complete this action
    dispatch(actions.addList({}));
  };
  const [dragging, setDrag] = useState(false);
  //can we put this state inside initial state, or can we create a separate reducer to handle this?
  const [listPosition, setListPosition] = useState([
    { listId: 0, X: 0, Y: 100 },
    { listId: 1, X: 400, Y: 100 }
  ]);
  const [moveList, selectList] = useState(0);
  const onMouseMoveHandle = e => {
    if (dragging) {
      console.log("moving", e.clientX, e.clientY);
      let newState = [...listPosition];
      newState[moveList] = {
        listId: moveList,
        X: e.clientX - 150,
        Y: e.clientY
      };
      setListPosition(newState);
      setX(e.clientX - 150);
      setY(e.clientY);
    }
  };
  console.log(listPosition);
  const onMouseUpHandler = e => {
    console.log("mouse up", X, Y);
    setDrag(false);
  };
  return (
    <div
      className="App"
      onMouseMove={onMouseMoveHandle}
      onMouseUp={onMouseUpHandler}
    >
      {lists.map((todoList, index) => {
        return (
          <TodoList
            listId={index}
            key={index}
            todoList={todoList}
            setDrag={setDrag}
            listPosition={listPosition[index]}
            dragging={dragging}
            selectList={selectList}
          />
        );
      })}
      <div
        className="addTodoList-btn"
      >
        <FontAwesomeIcon
          onClick={onAddListHandler}
          className='addTodoList-icon'
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
