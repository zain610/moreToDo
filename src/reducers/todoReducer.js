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

/**
 * return {
        ...state,
        list: [(list[newLength] = { id: 1, header, todos }), ...state.list]
      };
 */
export const initialState = {
  list: [
    {
      id: 1,
      inputValue: "",
      header: "List 1",
      todos: [
        { title: "List 1 todo 1", body: "" },
        { title: "List 1 todo 2", body: "alkjsnfasf" }
      ]
    },
    {
      id: 2,
      inputValue: "",
      header: "List 2",
      todos: [
        { title: "List 2 todo 1", body: "" },
        { title: "List 12todo 2", body: "alkjsnfasf" }
      ]
    }
  ],
  showTodoForm: false
};
function list(state = initialState, action) {
  const currentLists = state.list.slice();
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actions.GET_TODOS:
      return { state };

    case actions.ADD_TODO:
      let { listKey = 0, title, body } = action.payload;
      //push title and body to the new state
      newState.list[listKey].todos.push({ title, body });
      const remainingListItems = state.list.splice(listKey, 1);
      //replace the OG state by (1) add a new list with new todos (2) splice the OG list
      //this will create side effects such as changing the order of the todos. We can probs change it from a grid like layout to a more dynamic layout.
      return {
        ...state,
        list: [
          (state.list[listKey] = {
            ...state.list[listKey],
            todos: [...newState.list[listKey].todos]
          }),
          ...remainingListItems
        ]
      };
    case actions.DELETE_TODO:
      let { listId, todoId } = action.payload;
      let newTodos = newState.list[listId].todos.filter((_, i) => {
        return i !== todoId;
      });
      newState.list[listId].todos = newTodos;
      return {
        ...state,
        list: [...newState.list]
      };
    case actions.UPDATE_SEARCH:
      //gets new value entered by user and updates the input value of the todo list
      const { list_ID, value } = action.payload;
      let newList = (newState.list[list_ID].inputValue = value);
      return {
        ...state,
        list: [...newState.list]
      };
    default:
      return state;
  }
}
// combineReducer generates a func that calls your reducer with the slices of the state selected based on the keys.
// so the combineReducer({todos}) is equivalent to calling --todos: todos(state.todos, action)---
const todoApp = combineReducers({ list });
export default todoApp;
