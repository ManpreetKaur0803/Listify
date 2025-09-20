import React, { useContext } from "react";
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

  return (
    <ul>
      {filteredTask.map((item) => (
        <li
          key={item.id}
          className="px-4 py-3 rounded-lg hover:bg-gray-50 transition flex gap-4 text-lg"
        >
          <input
            type="checkbox"
            checked={item.status === "COMPLETED"}
            onChange={() => toggleStatus(item.id)}
          />
          <span
            className={
              item.status === "COMPLETED" ? "line-through text-gray-600" : ""
            }
          >
            {item.itemName}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
