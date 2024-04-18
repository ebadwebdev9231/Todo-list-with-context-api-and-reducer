import { ChangeEvent, useContext, useState } from "react";
import { TodoItemsContext } from "../context/todo-items-context";

const AddTodo = () => {
  const { addNewItem } = useContext(TodoItemsContext);
  const [todoName, setTodoName] = useState<string>("");
  const [todoDate, setTodoDate] = useState<string>("");

  const handleTodoName = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoName(event.target.value);
  };

  const handleTodoDate = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoDate(event.target.value);
  };

  const handleAddItems = () => {
    addNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };
  return (
    <div className="row">
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Add Todo"
          value={todoName}
          onChange={handleTodoName}
          required
        />
      </div>
      <div className="col-5">
        <input
          type="date"
          className="form-control"
          value={todoDate}
          onChange={handleTodoDate}
          required
        />
      </div>
      <div className="col-2">
        <button className="btn btn-success w-100" onClick={handleAddItems}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
