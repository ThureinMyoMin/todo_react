import { useContext } from "react";
import { ToDoContext } from "../../context/ToDoProvider";

const ToDoFilter = () => {
  const { setIsCompletedFilter } = useContext(ToDoContext);

  return (
    <div className="w-full flex  justify-end mt-5">
      <div className="flex">
        <input
          type="checkbox"
          name="chkCompletedFilter"
          id="chkCompletedFilter"
          className="mr-2"
          onChange={(e) => {
            setIsCompletedFilter(e.target.checked);
          }}
        />
        <label
          htmlFor="chkCompletedFilter"
          className="text-white cursor-pointer"
        >
          completed
        </label>
      </div>
    </div>
  );
};

export default ToDoFilter;
