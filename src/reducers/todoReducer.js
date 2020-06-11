//import actions
import * as actions from "../actions/actions";
import { combineReducers } from "redux";
import update from 'immutability-helper'

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
  switch (action.type) {
    case actions.GET_TODOS:
      return { state };

    case actions.ADD_TODO:
      
      let { listKey = 0, title, body } = action.payload;
      const modifyState = Object.assign({},state )
      const modifiedStateList = [...modifyState.list[listKey].todos, {title, body}] //ne todo list for the id provided
      modifyState.list[listKey].todos = modifiedStateList
      console.log('new state methods',modifyState.list, modifiedStateList)
      // modifyState.list = modifiedStateList
      return {
        ...state,
        list: [...modifyState.list]
      };
    case actions.DELETE_TODO:
      let { listId, todoId } = action.payload;
      let newState = Object.assign({}, state);
      let newTodos = newState.list[listId].todos.filter((_, i) => {
        return i !== todoId;
      });
      newState.list[listId].todos = newTodos;
      console.log("NEw state", newState, listId);

      return {
        ...state,
        list: [...newState.list]
      };
    case actions.UPDATE_SEARCH:
      //gets new value entered by user and updates the input value of the todo list
      let stateClone = Object.assign({}, state);

      const { list_ID, value } = action.payload;
      let newList = (stateClone.list[list_ID].inputValue = value);
      return {
        ...state,
        list: [...stateClone.list]
      };
    default:
      return state;
  }
}
// combineReducer generates a func that calls your reducer with the slices of the state selected based on the keys.
// so the combineReducer({todos}) is equivalent to calling --todos: todos(state.todos, action)---
const todoApp = combineReducers({ list });
export default todoApp;
