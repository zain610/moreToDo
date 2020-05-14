import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <input
        onChange={props.todoFilterOnChange}
        placeholder="Search Something..."
        style={{
          border: "none",
          backgroundColor: "transparent",
          outline: "0",
          width: "80%",
          padding: "0.5rem",
          fontSize: "x-large"
        }}
      />
      <div style={{ "border-left": "2px solid #333", margin: "5px 0 0 5px" }} />
      <FontAwesomeIcon
        style={{
          fontSize: "2rem",
          padding: "10px 10px 0 10px",
          color: "mediumpurple"
        }}
        onClick={props.addTodo}
        icon={faPlus}
      />
    </div>
  );
}
