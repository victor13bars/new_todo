import axios from "axios";
import { ITodo, ITodoState } from "../types/types";

const instance = axios.create();

export class TodoApi {
  static async getTodos(): Promise<ITodoState[]> {
    const res = await instance.get(`http://localhost:3000/todos`);
    return res.data;
  }

  static async createTodo(todo: Partial<ITodo>): Promise<ITodoState> {
    const res = await instance.post("http://localhost:3000/todos", todo);
    return res.data;
  }

  static async deleteTodo(id: string): Promise<void> {
    await instance.delete(`http://localhost:3000/todos/${id}`);
  }

  static async completeTodo(todo: Partial<ITodo>): Promise<void> {
    await instance.patch(`http://localhost:3000/todos/${todo.id}`, todo);
  }

  static async editTodo(todo:Partial<ITodo>):Promise<ITodo>{
    const res =  await instance.patch(`http://localhost:3000/todos/${todo.id}`, todo)
    return res.data[1][0]
  }
}
