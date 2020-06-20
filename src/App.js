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
<<<<<<< HEAD
  console.log(lists);
  const [dragging, setDrag] = useState(false)
  const [X, setX] = useState(0)
  const [Y, setY] = useState(0)
  //can we put this state inside initial state, or can we create a separate reducer to handle this?
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
=======
  const onHandleListDrag = e => {
    console.log("dragging", e.clientX, e.clientY);
    setX(e.clientX);
    setY(e.clientY);
  };
  return (
    <div className="App" onDrag={onHandleListDrag}>
>>>>>>> 51ad208751b451455bee50497195d66a90317d3c
      {lists.map((todoList, index) => {
        const { id, header, todos, inputValue } = todoList;

        return (
          <TodoList
            inputValue={inputValue}
            listId={index}
            key={id}
            todo={todos}
<<<<<<< HEAD
            setDrag={setDrag}
            listPosition={listPosition[index]}
            dragging={dragging}
            selectList = {selectList}
=======
            X={X}
            Y={Y}
>>>>>>> 51ad208751b451455bee50497195d66a90317d3c
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
