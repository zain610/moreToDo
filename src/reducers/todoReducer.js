//import actions
import * as actions from "../actions/actions";
import { combineReducers } from "redux";

//initialise state
export const initialState = {
  todos: [
    [
      {
        id: 1,
        title: "List 1",
        body: "Hello Everyone, welcome to my TED Talk what"
      },
      {
        id: 2,
        title: "List 1",
        body: "Hello Everyone, welcome to my TED Talk what"
      }
    ],
    [
      {
        id: 1,
        title: "list 2 ",
        body: "Body of todo list 2 item 1"
      }
    ],
    [
      {
        id: 1,
        title: "List 3",
        body: "Body of todo list 2 item 1"
      }
    ],
    [
      {
        id: 1,
        title: "List 4",
        body: "Body of todo list 2 item 1"
      }
    ],
    [
      {
        id: 1,
        title: "List 5",
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
      const { key = 0, title, body } = action.payload;

      return {
        ...state,
        todos: [
          (todos[key] = [
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
const todoApp = combineReducers({
  todos
});
export default todoApp;
