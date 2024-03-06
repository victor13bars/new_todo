import { useEffect } from "react";
import { Header } from "./componnets/header";
import { TodoFrom } from "./componnets/todo-form";
import { TodoList } from "./componnets/todo-list";
import "./App.css";
import { useDispatch } from "react-redux";
import { getTodos } from "./redux/actions";

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container pt-3">
            <TodoFrom />
            <h2 className="pt-3">Новые дела</h2>
            <TodoList />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
