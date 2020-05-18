/*
 * actions are the what of the application
 */
export const GET_TODOS = "GET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const UPDATE_SEARCH = "UPDATE_SEARCH";
export const DELETE_TODO = "DELETE_TODO";

/*
 * other constants
 */

/*
 * action creators
 */

export function addTodo(payload) {
  return { type: ADD_TODO, payload };
}
export function updateSearchValue(payload) {
  return { type: UPDATE_SEARCH, payload };
}
export function deleteTodo(payload) {
  return {
    type: DELETE_TODO,
    payload
  };
}
export function getTodos() {
  return {
    type: GET_TODOS
  };
}
