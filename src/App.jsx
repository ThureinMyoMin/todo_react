import ToDoFilter from "./components/ToDoFilter";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import ToDoProvider from "./context/ToDoProvider";

function App() {
  return (
    <ToDoProvider>
      <div className="bg-slate-500 w-[60%] mx-auto rounded px-6 py-4">
        <ToDoForm />
        <ToDoFilter />
        <ToDoList />
      </div>
    </ToDoProvider>
  );
}

export default App;
