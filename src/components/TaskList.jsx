import React, { useContext, useEffect } from "react";
import ListContext from "../contexts/ListContext";

const TaskList = () => {
  // const [listItem, setListItem] = useState(["hii", "bye", "gn"]);
  const { List, setList, Filter } = useContext(ListContext);

  const toggleStatus = (id) => {
    setList((prevList) =>
      prevList.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "COMPLETED" ? "PENDING" : "COMPLETED",
            }
          : task
      )
    );
  };

  const filteredTask = List.filter((task) => {
    return Filter === "ALL" ? true : task.status === Filter;
  });

  const deleteTask = (id) => {
    setList((prevList) => prevList.filter((task) => task.id !== id));
  };

  return (
    <ul>
      {filteredTask.map((item) => (
        <li
          key={item.id}
          className="px-3 py-2 rounded-lg hover:bg-gray-50 transition flex gap-4 text-lg"
        >
          <div className="flex justify-between w-full items-center">
            <div>
              <input
                type="checkbox"
                checked={item.status === "COMPLETED"}
                onChange={() => toggleStatus(item.id)}
              />{" "}
              <span
                className={
                  item.status === "COMPLETED"
                    ? "line-through text-gray-600"
                    : ""
                }
              >
                {item.itemName}
              </span>
            </div>
            <button
              onClick={() => deleteTask(item.id)}
              className="w-12 h-12 border rounded-e-lg bg-neutral-700 hover:bg-slate-950 font-medium"
            >
              ❌
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
