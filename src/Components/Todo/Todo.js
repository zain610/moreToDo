import React, { useState } from "react";
import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { deleteTodo } from "../../actions/actions";
import { connect } from "react-redux";

function Todo({ listId, todo, dispatch, index }) {
  const todoId = index;
  const [hide, toggleHide] = useState(true);
  const toggleStatus = () => {
    toggleHide(!hide);
  };
  const iconDirection =
      <FontAwesomeIcon
        onClick={toggleStatus}
        className="toggleStatus-icon"
        icon={hide ? faAngleDown : faAngleUp}
      />
  return (
    <div className="todo">
      <div className="header">
        <h1>{todo.title}</h1>
        <div className="action-btn">
          {iconDirection}
          <FontAwesomeIcon
            onClick={() => {
              dispatch(deleteTodo({ listId, todoId }));
            }}
            icon={faTrash}
            className="deleteTodo-icon"
          />
        </div>
      </div>
      {!hide ? <p className="body">{todo.body}</p> : ""}
    </div>
  );
}
export default connect()(Todo);
