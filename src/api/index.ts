import axios from "axios";
import { ITodo, ITodoState } from "../types/types";

const instance = axios.create();

export class TodoApi {
  static async createTodo(todo: Partial<ITodo>): Promise<ITodoState> {
    const res = await instance.post("http://localhost:3000/todos", todo);
    return res.data;
  }
}
