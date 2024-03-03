import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ITodoReducer } from "../../types/types";
import { useSelector } from "react-redux";
import { TodoItem } from "../todo-item";

export const TodoList = () => {
  const { todos } = useSelector((state: ITodoReducer) => state.todoReducer);

  return (
    <TransitionGroup component="ul" className="list-group">
      {todos.map((todo) => (
        <CSSTransition timeout={800} classNames={"todo"} key={todo.id}>
          <TodoItem todo={todo} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
