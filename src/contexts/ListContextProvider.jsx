import { useState } from "react";
import ListContext from "./ListContext";

const ListContextProvider = ({ children }) => {
  const [List, setList] = useState([]);
  const [Filter, setFilter] = useState("ALL");
  return (
    <ListContext.Provider value={{ List, setList, Filter, setFilter }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;
