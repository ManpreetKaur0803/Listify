import React, { useContext } from "react";
import ListContext from "../contexts/ListContext";

const hoverClass = {
  ALL: "hover:bg-zinc-900",
  COMPLETED: "hover:bg-green-600",
  PENDING: "hover:bg-yellow-500",
};
const activeClass = {
  ALL: "bg-zinc-900 text-white",
  COMPLETED: "bg-green-600 text-white",
  PENDING: "bg-yellow-500 text-white",
};

const Button = ({ btnName }) => {
  const { Filter, setFilter } = useContext(ListContext);
  const isActive = Filter === btnName;
  return (
    <button
      onClick={() => setFilter(btnName)}
      className={`px-4 py-2 text-lg font-medium border border-zinc-400 rounded-lg ${
        hoverClass[btnName]
      } hover:text-white transition ${
        isActive ? activeClass[btnName] : "bg-white color-black"
      }`}
    >
      {btnName}
    </button>
  );
};

export default Button;
