/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const [isCompletedFilter, setIsCompletedFilter] = useState(false);
  const [completedToDos, setCompletedToDos] = useState([]);
  useEffect(() => {
    const lsToDo = JSON.parse(localStorage.getItem("td_r_d"));
    lsToDo && setTodos([...lsToDo]);
  }, []);

  useEffect(() => {
    const filterToDo = todos.filter((todo) => todo.completed);
    setCompletedToDos(filterToDo);
  }, [todos]);

  const addToDo = (newTodo) => {
    newTodo.id = uuidv4();
    localStorage.setItem("td_r_d", JSON.stringify([...todos, newTodo]));
    setTodos([...todos, newTodo]);
  };

  const deleteToDo = (todoId) => {
    console.log(todoId);
    const filterToDo = todos.filter((todo) => todo.id != todoId);
    setTodos([...filterToDo]);
    localStorage.setItem("td_r_d", JSON.stringify([...filterToDo]));
  };

  const editToDo = (todo) => {
    const editedToDo = todos.map((td) => {
      if (td.id == todo.id) {
        return todo;
      }
      return td;
    });

    setTodos([...editedToDo]);
    localStorage.setItem("td_r_d", JSON.stringify([...editedToDo]));
  };

  return (
    <ToDoContext.Provider
      value={{
        todos,
        addToDo,
        deleteToDo,
        editToDo,
        isCompletedFilter,
        setIsCompletedFilter,
        completedToDos,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;
