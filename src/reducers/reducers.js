import { combineReducers } from "redux";
import todo from "./todoReducer";
// import list from "./listReducer";

export default combineReducers({
  todo
});

// combineReducer generates a func that calls your reducer with the slices of the state selected based on the keys.
// so the combineReducer({todos}) is equivalent to calling --todos: todos(state.todos, action)---;
