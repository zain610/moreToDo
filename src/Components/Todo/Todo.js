import React, { useState } from "react";
import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { deleteTodo } from "../../actions/actions";

function Todo({ listId, todo, dispatch, index }) {
  const [hide, toggleHide] = useState(true);
  const toggleStatus = () => {
    toggleHide(!hide);
  };

  const iconDirection =
    hide === true ? (
      <FontAwesomeIcon
        onClick={toggleStatus}
        style={{
          fontSize: "2rem",
          padding: "10px 10px 0 10px",
          color: "mediumpurple"
        }}
        icon={faAngleDown}
      />
    ) : (
      <FontAwesomeIcon
        onClick={toggleStatus}
        style={{
          fontSize: "2rem",
          padding: "10px 10px 0 10px",
          color: "mediumpurple"
        }}
        icon={faAngleUp}
      />
    );
  const { id } = todo;
  return (
    <div className="todo">
      <div className="header">
        <h1>{todo.title}</h1>
        <div className="action-btn-div">
          {iconDirection}
          <FontAwesomeIcon
            onClick={() => {
              console.log(listId, index);
              dispatch(deleteTodo({ listId, id }));
            }}
            icon={faTrash}
            style={{
              fontSize: "1.5rem",
              padding: "10px 10px 0 10px",
              color: "#333"
            }}
          />
        </div>
      </div>
      {hide === false ? <p>{todo.body}</p> : ""}
    </div>
  );
}

export default connect()(Todo);
