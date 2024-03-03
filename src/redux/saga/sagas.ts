import { call, Effect, put,takeEvery } from "redux-saga/effects";
import {
  ICreateAction,
  ITodo,
  ITodoActionTypes,
} from "../../types/types";
import { TodoApi } from "../../api";

function* sagaCreateTodo(action: ICreateAction): Generator<Effect, void> {
  try {
    const todoObj: Partial<ITodo> = {
      title: action.payload,
      done: false,
    };
    const todo = yield call(TodoApi.createTodo, todoObj);
    yield put({ type: ITodoActionTypes.CREATE_TODO_SUCCESS, payload: todo });
  } catch {}
}

export function* sagaWatcher():Generator<Effect,void>{
    yield takeEvery(ITodoActionTypes.CREATE_TODO,sagaCreateTodo)
}