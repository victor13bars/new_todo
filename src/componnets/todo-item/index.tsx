import { ITodo } from "../../types/types";

interface ITodoItemProps {
  todo: ITodo;
}
export const TodoItem = ({ todo }: ITodoItemProps) => {
  return (
    <li className="d-flex mb-3 justify-content-between align-items-center">
      <div>
        <span>{todo.title}</span>
      </div>
      <div>
        <button className="btn my-btn btn-primary">Изменить</button>
        <button className="btn my-btn btn-success">Завершить</button>
        <button className="btn btn-danger">Удалить</button>
      </div>
    </li>
  );
};
