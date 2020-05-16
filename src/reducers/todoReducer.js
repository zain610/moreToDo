//import actions
import * as actions from "../actions/actions";

//initialise state
export const initialState = {
  todos: [
    {
      id: 1,
      title: "Hello",
      body: "Hello Everyone, welcome to my TED Talk what"
    },
    { id: 2, title: "Lorem Ipsum", body: "GG all" }
  ],
  inputValue: "",
  showTodoForm: false
};
export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TODOS:
      return { state };
  }
}
