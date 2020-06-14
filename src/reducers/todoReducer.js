//import actions
import * as actions from "../actions/actions";
import { initialState } from "../Constants/InitialState";

//initialise state
// class TodoList {
//   constructor(id, description, todo)
//     id;
//   description;
//   todos = []
// }

function todo(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actions.GET_TODOS:
      return { state };

    case actions.ADD_TODO:
      let { listKey = 0, title, body } = action.payload;
      const modifiedStateList = [
        ...newState.list[listKey].todos,
        { title, body }
      ]; //ne todo list for the id provided
      newState.list[listKey].todos = modifiedStateList;
      // modifyState.list = modifiedStateList
      return {
        ...state,
        list: [...newState.list]
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
    case actions.ADD_LIST:
      console.log("add list");
      const addNewList = {
        id: 3,
        inputValue: "",
        header: "List 2",
        todos: [
          { title: "List 2 todo 1", body: "" },
          { title: "List 12todo 2", body: "alkjsnfasf" }
        ]
      };
      return {
        ...state,
        list: [...state.list, addNewList]
      };
    default:
      return state;
  }
}

export default todo;
