import { useEffect, useState } from "react";
import ListContext from "./ListContext";

const ListContextProvider = ({ children }) => {
  const [List, setList] = useState(() => {
    const savedList = localStorage.getItem("List");

    if (!savedList || savedList === "undefined") return [];

    return JSON.parse(savedList);
  });

  const [Filter, setFilter] = useState("ALL");

  useEffect(() => {
    localStorage.setItem("List", JSON.stringify(List));
  }, [List]);
  
  return (
    <ListContext.Provider value={{ List, setList, Filter, setFilter }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;
