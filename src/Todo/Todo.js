import React from "react";

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
    return (
      <div
        class="todo"
        style={{ margin: "0.75rem", borderBottom: "2px solid #333" }}
      >
        <div
          class="header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline"
          }}
        >
          <h1>{this.props.todo.title}</h1>
          <div class="action-btn-div">
            <button
              onClick={this.toggleStatus}
              class="btn"
              style={{ margin: "0.4rem" }}
            >
              Hide Body
            </button>
            <button
              onClick={this.props.removeTodo.bind(this, this.props.todo.id)}
              class="btn"
              style={{ margin: "0.4rem" }}
            >
              Remove
            </button>
          </div>
        </div>
        {this.state.hide === false ? <p>{this.props.todo.body}</p> : ""}
      </div>
    );
  }
}
