import React, { useContext, useState } from "react";
import ListContext from "../contexts/ListContext";

const AddTask = () => {
  const [item, setItem] = useState("");

  const { setList } = useContext(ListContext);

  const handleList = (e) => {
    e.preventDefault();

    if (!item) return;
    console.log(`${item} is added.`);

    const task = {
      id: Date.now(),
      itemName: item,
      status: "PENDING",
    };

    setList((Prev) => [...Prev, task]);
    setItem("");
  };

  return (
    <div className="mt-5 mb-5">
      <input
        type="text"
        className="border border-zinc-950 p-3 rounded-s-lg font-medium w-96"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleList(e);
        }}
        placeholder="Add Task"
      />
      <button
        onClick={handleList}
        className="border border-zinc-950 p-3 rounded-e-lg font-medium w-20"
      >
        ADD
      </button>
    </div>
  );
};

export default AddTask;
