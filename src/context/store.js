import React, { createContext, useState } from "react";

export const store = createContext({
  selectedDate: "",
  setSelectedDate: () => {},
});

const Context = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState("");


  return (
    <store.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </store.Provider>
  );
};

export default Context;
