import { useContext } from "react";
import TodoItemRow from "./TodoItemRow";
import { TodoItemsContext } from "../context/todo-items-context";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <>
      {todoItems.map((items) => (
        <TodoItemRow
          key={items.id}
          id={items.id}
          name={items.name}
          dueDate={items.dueDate}
        />
      ))}
    </>
  );
};

export default TodoItems;
