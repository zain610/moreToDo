import React from "react";
import Todo from "../Todo/Todo";
import Header from "../Todo/Header";
import { connect } from "react-redux";
import "../../App.css";

function TodoList({ listId, todo, inputValue }) {
  //ProTip: Use arrow functions over regular functions to bind _this. Else you need to manually bind this in the constructor
  // const removeTodo = id => {
  //   console.log("id", id);
  //   this.setState(state => ({
  //     todos: todos.filter(todo => todo.id !== id)
  //   }));
  // };
  const filteredTodos = todo.filter(item => {
    console.log("todoList", todo, inputValue);
    return (
      item.title.toLowerCase().includes(inputValue) ||
      item.body.toLowerCase().includes(inputValue)
    );
  });
  console.log(filteredTodos);
  return (
    <div className="todoList">
      <Header listId={listId} inputValue={inputValue} />
      <hr />
      {}
      {filteredTodos.map((todo, i) => (
        <Todo listId={listId} key={todo.id} todo={todo} index={i} />
      ))}
    </div>
  );
}

export default connect()(TodoList);
