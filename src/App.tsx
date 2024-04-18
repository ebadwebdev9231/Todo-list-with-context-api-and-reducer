import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./context/todo-items-context";

const App = () => {
  return (
    <TodoItemsContextProvider>
      <div className="container">
        <h1 className="text-center my-4">Todo App</h1>
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </div>
    </TodoItemsContextProvider>
  );
};

export default App;
