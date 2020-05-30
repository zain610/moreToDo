//import actions
import * as actions from "../actions/actions";
import { combineReducers } from "redux";

//initialise state
// class TodoList {
//   constructor(id, description, todo)
//     id;
//   description;
//   todos = []
// }
export const initialState = {
  list: [
    {
      id: 1,
      header: "List 1",
      todos: [
        { title: "List 1 todo 1", body: "" },
        { title: "List 1 todo 2", body: "alkjsnfasf" }
      ]
    },
    {
      id: 2,
      header: "List 2",
      todos: [
        { title: "List 2 todo 1", body: "" },
        { title: "List 12todo 2", body: "alkjsnfasf" }
      ]
    }
  ],
  inputValue: "",
  showTodoForm: false
};
function list(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TODOS:
      return { state };

    case actions.ADD_TODO:
      console.log("payload", action);
      const { key = 0, title, body } = action.payload;

      return {
        ...state,
        todos: [
          (list[key] = [
            { id: state.todos[key].length + 1, title, body },
            ...state.todos[key]
          ]),
          ...state.todos
        ]
      };
    case actions.DELETE_TODO:
      const { listId = 0 } = action.payload;
      const newStateTodos = state.todos.slice();
      const newTodo = state.todos[listId].filter(todo => {
        console.log(todo, action.payload.id);
        return todo.id !== action.payload.id;
      });
      newStateTodos[listId] = newTodo;
      console.log(newStateTodos);
      // -- o --
      //find a way to display fltered, remaining
      const newObject = {
        ...state,
        todos: newStateTodos
      };

      // return newObject;
      return newObject;
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
const todoApp = combineReducers({ list });
export default todoApp;
