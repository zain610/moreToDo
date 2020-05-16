/*
 * actions are the what of the application
 */

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const UPDATE_SEARCH = "UPDATE_SEARCH";
export const DELETE_TODO = "DELETE_TODO";

/*
 * other constants
 */

/*
 * action creators
 */

export function addTodo(text) {
  return { type: ADD_TODO, text };
}
export function updateSearchValue(text) {
  return { type: UPDATE_SEARCH, text };
}
export function deleteTodo(text) {
  return {
    type: DELETE_TODO,
    text
  };
}
