//import actions
import * as actions from "../actions/actions";
import { combineReducers } from "redux";

//initialise state
export const initialState = {
  todos: [
    [
      {
        id: 1,
        title: "Hello",
        body: "Hello Everyone, welcome to my TED Talk what"
      },
      { id: 2, title: "Lorem Ipsum", body: "GG all" }
    ],
    [
      {
        id: 1,
        title: "Hello from todo lisst 2",
        body: "Body of todo list 2 item 1"
      }
    ]
  ],
  inputValue: "",
  showTodoForm: false
};
function todos(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TODOS:
      return { state };
    case actions.ADD_TODO:
      console.log("payload", action);
      const { title, body } = action.payload;
      return {
        ...state,
        todos: [{ id: state.todos.length + 1, title, body }, ...state.todos]
      };
    case actions.DELETE_TODO:
      console.log(action.payload);
      const filteredTodos = state.todos.filter(todo => {
        return todo.id !== action.payload.id;
      });
      return {
        ...state,
        todos: filteredTodos
      };
    case actions.UPDATE_SEARCH:
      return {
        ...state,
        inputValue: action.payload.value
      };
    default:
      return state;
  }
}
// combineReducer generates a func that calls your reducer with the slices of the state selected based on the keys.
// so the combineReducer({todos}) is equivalent to calling --todos: todos(state.todos, action)---
const todoApp = combineReducers({
  todos
});
export default todoApp;
