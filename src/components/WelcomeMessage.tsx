import { useContext } from "react";
import { TodoItemsContext } from "../context/todo-items-context";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <p className="fs-2 text-center mt-5">
      {todoItems.length === 0 && "No Items Found"}
    </p>
  );
};

export default WelcomeMessage;
