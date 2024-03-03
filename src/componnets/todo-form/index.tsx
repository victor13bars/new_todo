import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../redux/actions";
export const TodoFrom = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) {
      return;
    }
    
    dispatch(createTodo(title));
    setTitle("");
  };
  const handleChangeIputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <form
      className="mb-3 d-flex align-items-end justify-content-between"
      onSubmit={handleSubmit}
    >
      <div className="form-group input-wrapper">
        <label htmlFor="" className="form-label fw-medium">
          Введите название дела
        </label>
        <input
          value={title}
          type="text"
          className="form-control"
          onChange={handleChangeIputValue}
        />
      </div>
      <button className="btn btn-success">создать</button>
    </form>
  );
};
