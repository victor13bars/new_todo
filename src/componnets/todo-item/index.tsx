import { useState } from "react";
import { ITodo } from "../../types/types";

interface ITodoItemProps {
  todo: ITodo;
  removeTodo: (id: string) => void;
  doneTodo: (id: string, done: boolean) => void;
  changeTodo: (id: string, done: boolean, title: string) => void;
}

export const TodoItem = ({
  todo,
  removeTodo,
  doneTodo,
  changeTodo,
}: ITodoItemProps) => {
  const [isTodoEdit, setIsTodoEdit] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      changeTodo(todo.id, todo.done, newTitle);
      setIsTodoEdit(!isTodoEdit);
    }
  };

  const handleTodoEdit = () => {
    setIsTodoEdit(!isTodoEdit);
  };

  const handleDelete = () => {
    removeTodo(todo.id);
  };

  const handleComplete = () => {
    doneTodo(todo.id, !todo.done);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  return (
    <li
      className={`todo-item list-group-item d-flex justify-content-between align-items-center ${
        todo.done ? "list-group-item-success" : ""
      }`}
    >
      <div onKeyPress={handleSubmit}>
        {isTodoEdit ? (
          <input type="text" onChange={handleTitleChange} />
        ) : (
          <span className={`${todo.done ? "title-done" : ""}`}>
            {todo.title}
          </span>
        )}
      </div>
      <div>
        <button className="btn my-btn btn-primary" onClick={handleTodoEdit}>
          Изменить
        </button>
        <button className="btn my-btn btn-success" onClick={handleComplete}>
          Завершить
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Удалить
        </button>
      </div>
    </li>
  );
};
