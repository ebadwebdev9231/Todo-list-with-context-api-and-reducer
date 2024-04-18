import { useContext } from "react";
import { TodoItemProps, TodoItemsContext } from "../context/todo-items-context";

const TodoItemRow = ({ id, name, dueDate }: TodoItemProps) => {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="row mt-3">
      <div className="col-5">
        <p>{name}</p>
      </div>
      <div className="col-5">
        <p>{dueDate}</p>
      </div>
      <div className="col-2">
        <button className="btn btn-danger w-100" onClick={() => deleteItem(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItemRow;
