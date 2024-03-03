import {
  ITodoActionTypes,
  ITodoActions,
  ITodoState,
} from "../types/types";

export const initialState = {
  todos: [],
};

export const todoReducer = (
  state: ITodoState = initialState,
  action: ITodoActions
) => {
  switch (action.type) {
    case ITodoActionTypes.CREATE_TODO_SUCCESS:
      return { todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};
