import { useContext, useRef } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { ToDoContext } from "../../context/ToDoProvider";
const ToDoForm = () => {
  const { addToDo } = useContext(ToDoContext);
  const refTask = useRef(null);

  const chkVale = (refEl) => {
    console.log(refEl);
    if (refEl.current.value == "") {
      refEl.current.focus();
      refEl.current.classList.add("border-red-500", "border-2");
      console.log(refEl.current.classList);
      return false;
    }
    return true;
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (chkVale(refTask)) {
      const newToDo = {
        text: refTask.current.value,
        completed: false,
      };

      addToDo(newToDo);
      refTask.current.value = "";
      refTask.current.focus();
    }
  };

  return (
    <form onSubmit={(e) => formSubmitHandler(e)}>
      <div className="flex justify-between">
        <input
          type="text"
          name="todo"
          id="todo"
          ref={refTask} //const t=document.getElementByID("todo")
          className="w-[90%] shadow-lg outline-none pl-3 rounded"
          onChange={() => {
            if (refTask.current.value) {
              refTask.current.classList.remove("border-red-500", "border-2");
            }
          }}
        />
        <button>
          <BsFillPlusSquareFill size={44} color="white" className="shadow-lg" />
        </button>
      </div>
    </form>
  );
};

export default ToDoForm;
