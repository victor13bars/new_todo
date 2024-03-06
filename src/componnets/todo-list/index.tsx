import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ITodoReducer } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { TodoItem } from "../todo-item";
import { completeTodo, deleteTodo, editTodo } from "../../redux/actions";

export const TodoList = () => {
  const { todos } = useSelector((state: ITodoReducer) => state.todoReducer);
  const dispatch = useDispatch();

  const removeTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const doneTodo = (id: string, done: boolean) => {
    dispatch(completeTodo(id, done));
  };

  const changeTodo = (id: string, done: boolean, title: string) => {
    dispatch(editTodo(id, done, title));
  };

  return (
    <TransitionGroup component="ul" className="list-group">
      {todos.map((todo) => (
        <CSSTransition timeout={800} classNames={"todo"} key={todo.id}>
          <TodoItem todo={todo} removeTodo={removeTodo} doneTodo={doneTodo} changeTodo={changeTodo}/>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
