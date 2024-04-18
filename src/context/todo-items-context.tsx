import { ReactNode, createContext, useReducer } from "react";

interface Props {
  children: ReactNode;
}

export interface TodoItemProps {
  id: number;
  name: string;
  dueDate: string;
}

interface TodoContextValue {
  todoItems: TodoItemProps[];
  addNewItem: (newItemName: string, newItemDate: string) => void;
  deleteItem: (id: number) => void;
}

interface TodoItemAction {
  todoItems: TodoItemProps[];
  nextId: number;
}

type Action =
  | { type: "ADD_ITEM"; payload: TodoItemProps }
  | { type: "DELETE_ITEM"; payload: number };

const initialState: TodoItemAction = {
  todoItems: [],
  nextId: 1,
};

export const TodoItemsContext = createContext({} as TodoContextValue);

const reducer = (
  state: typeof initialState,
  action: Action
): typeof initialState => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        todoItems: [...state.todoItems, action.payload],
        nextId: state.nextId + 1,
      };

    case "DELETE_ITEM":
      return {
        ...state,
        todoItems: state.todoItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

const TodoItemsContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addNewItem = (newItemName: string, newItemDate: string) => {
    const newTodoItem: TodoItemProps = {
      id: state.nextId,
      name: newItemName,
      dueDate: newItemDate,
    };
    dispatch({ type: "ADD_ITEM", payload: newTodoItem });
  };

  const deleteItem = (id: number) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: state.todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
