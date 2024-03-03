import { Header } from "./componnets/header";
import { TodoFrom } from "./componnets/todo-form";
import "./App.css";
import { TodoList } from "./componnets/todo-list";

function App() {
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
