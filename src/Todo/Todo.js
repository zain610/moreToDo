import React, { useState } from "react";
import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

export default function Todo(props) {
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
  return (
    <div className="todo">
      <div className="header">
        <h1>{props.todo.title}</h1>
        <div className="action-btn-div">
          {iconDirection}
          <FontAwesomeIcon
            onClick={props.removeTodo.bind(this, props.todo.id)}
            icon={faTrash}
            style={{
              fontSize: "1.5rem",
              padding: "10px 10px 0 10px",
              color: "#333"
            }}
          />
        </div>
      </div>
      {hide === false ? <p>{props.todo.body}</p> : ""}
    </div>
  );
}
