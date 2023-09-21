/* eslint-disable react/prop-types */
import { useContext, useRef, useState } from "react";
import {
  RiEdit2Fill,
  RiDeleteBin2Fill,
  RiCheckFill,
  RiCloseFill,
} from "react-icons/ri";
import { ToDoContext } from "../../context/ToDoProvider";

const ToDoItem = ({ todo }) => {
  const { deleteToDo, editToDo } = useContext(ToDoContext);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const refEditInput = useRef(null);

  const DeleteHandler = () => {
    deleteToDo(todo.id);
  };

  const EditHandler = () => {
    setIsEditMode(true);
    setIsReadOnly(false);
    refEditInput.current.focus();
  };

  const CancelHandler = () => {
    setIsEditMode(false);
    setIsReadOnly(true);
  };

  const SaveChangeHandler = () => {
    setIsEditMode(false);
    setIsReadOnly(true);
    todo.text = refEditInput.current.value;
    editToDo(todo);
  };

  const CompleteCheckHandler = (e) => {
    console.log(e.target.checked);
    todo.completed = e.target.checked;
    editToDo(todo);
  };
  console.log(todo);
  return (
    <div className=" flex justify-between w-full rounded items-center p-4 bg-slate-600">
      <div className="flex text-white items-center gap-4">
        <input
          onClick={(e) => CompleteCheckHandler(e)}
          type="checkbox"
          name="chk-completed"
          defaultChecked={todo.completed ? true : false}
          id="chk-completed"
          checked={todo.completed ? true : false}
        />
        <input
          type="text"
          ref={refEditInput}
          defaultValue={todo.text}
          readOnly={isReadOnly}
          className={`outline-none bg-transparent  w-full ${
            !isEditMode && todo.completed ? "line-through text-red-600" : ""
          }`}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              SaveChangeHandler();
            }
          }}
        />
      </div>

      {isEditMode ? (
        <div className="flex justify-center">
          <button className="mr-4" onClick={SaveChangeHandler}>
            <RiCheckFill
              size={34}
              className="p-2 mr-[1px] text-white bg-green-400 rounded"
            />
          </button>
          <button onClick={CancelHandler}>
            <RiCloseFill
              size={34}
              className="p-2  text-white bg-red-500 rounded"
            />
          </button>
        </div>
      ) : (
        <div className="flex justify-center">
          <button className="mr-4" onClick={EditHandler}>
            <RiEdit2Fill
              size={34}
              className="p-2 mr-[1px] text-white bg-yellow-400 rounded"
            />
          </button>
          <button onClick={DeleteHandler}>
            <RiDeleteBin2Fill
              size={34}
              className="p-2  text-white bg-red-500 rounded"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ToDoItem;
