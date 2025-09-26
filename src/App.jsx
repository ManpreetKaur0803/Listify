import "./App.css";
import AddTask from "./components/AddTask";
import Button from "./components/Button";
import TaskList from "./components/TaskList";
import ListContextProvider from "./contexts/ListContextProvider";

function App() {
  return (
    <ListContextProvider>
      <div className="font-suse flex flex-col items-center">
        <h1 className="text-5xl font-bold text-zinc-950 tracking-wide mb-5">
          Listify
        </h1>
        <AddTask />
        <div className="w-full max-w-lg p-5 rounded-xl shadow-lg bg-white">
          <div className="flex justify-center gap-3 mb-5">
            <Button btnName="ALL" />
            <Button btnName="COMPLETED" />
            <Button btnName="PENDING" />
          </div>
          <div className="mt-1 rounded-md border border-zinc-950 border-solid h-auto">
            <TaskList />
          </div>
        </div>
      </div>
    </ListContextProvider>
  );
}

export default App;
