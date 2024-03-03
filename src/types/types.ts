export enum ITodoActionTypes {
  CREATE_TODO = "CREATE_TODO",
  CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS",
  GET_TODOS = "GET_TODOS",
  CHANGE_TODO = "CHANGE_TODO",
  DELETE_TODO = "DELETE_TODO",
}

export interface ITodo {
  id: string;
  title: string;
  done: boolean;
}

export interface ITodoState {
  todos: ITodo[];
}

export interface ITodoReducer {
  todoReducer: ITodoState;
}

export interface ICreateAction {
  type: ITodoActionTypes.CREATE_TODO_SUCCESS;
  payload: string;
}

export type ITodoActions = ICreateAction;
