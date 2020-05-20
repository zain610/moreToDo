import React from "react";
import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true
    };
    console.log(this.props);

    this.toggleStatus = this.toggleStatus.bind(this);
  }
  toggleStatus = () => {
    this.setState(state => ({
      hide: !state.hide
    }));
  };
  render() {
    const iconDirection =
      this.state.hide === true ? (
        <FontAwesomeIcon
          onClick={this.toggleStatus}
          style={{
            fontSize: "2rem",
            padding: "10px 10px 0 10px",
            color: "mediumpurple"
          }}
          icon={faAngleDown}
        />
      ) : (
        <FontAwesomeIcon
          onClick={this.toggleStatus}
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
          <h1>{this.props.todo.title}</h1>
          <div className="action-btn-div">
            {iconDirection}
            <FontAwesomeIcon
              onClick={this.props.removeTodo.bind(this, this.props.todo.id)}
              icon={faTrash}
              style={{
                fontSize: "1.5rem",
                padding: "10px 10px 0 10px",
                color: "#333"
              }}
            />
          </div>
        </div>
        {this.state.hide === false ? <p>{this.props.todo.body}</p> : ""}
      </div>
    );
  }
}
