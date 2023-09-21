import { useContext } from "react";
import ToDoItem from "./ToDoItem";
import { ToDoContext } from "../../context/ToDoProvider";

const ToDoList = () => {
  const { todos, isCompletedFilter, completedToDos } = useContext(ToDoContext);
  return (
    <div className="mt-2">
      <h1 className="text-2xl mb-4 text-white">Todo List</h1>
      <hr />
      <div className="flex mt-2 flex-col gap-y-2">
        {todos.map((todo) => {
          if (!isCompletedFilter) {
            if (!todo.completed) {
              return <ToDoItem todo={todo} key={todo.id} />;
            }
          } else {
            if (todo.completed) {
              return <ToDoItem todo={todo} key={todo.id} />;
            }
          }
        })}
      </div>
      {!isCompletedFilter && completedToDos.length > 0 && (
        <div className="mt-4  py-5 ">
          <h1 className="text-2xl mb-4 text-white">Completed</h1>
          <hr />
          <div className="flex mt-2 flex-col gap-y-2">
            {completedToDos.map((todo) => (
              <ToDoItem todo={todo} key={todo.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDoList;
