import React, { createContext, useState } from "react";

export const store = createContext({
  selectedDate: "",
  setSelectedDate: () => {},
  formInput: {},
  setFormInput: () => {},
  timeOptions: [
    { id: 1, time: "09:00", isBooked: true },
    { id: 2, time: "10:00", isBooked: true },
    { id: 3, time: "11:00", isBooked: true },
    { id: 4, time: "12:00", isBooked: true },
    { id: 5, time: "14:00", isBooked: true },
    { id: 6, time: "15:00", isBooked: true },
    { id: 7, time: "16:00", isBooked: true },
    { id: 8, time: "17:00", isBooked: true },
    { id: 9, time: "18:00", isBooked: true },
    { id: 10, time: "19:00", isBooked: true },
    { id: 11, time: "20:00", isBooked: true },
    { id: 12, time: "21:00", isBooked: true },
  ],
  setTimeOptions: () => {},
  menu: "appointment",
  setMenu: () => {},
});

const Context = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [formInput, setFormInput] = useState({});
  const [timeOptions, setTimeOptions] = useState([]);
  const [menu, setMenu] = useState("appointment");

  return (
    <store.Provider
      value={{
        selectedDate,
        setSelectedDate,
        formInput,
        setFormInput,
        timeOptions,
        setTimeOptions,
        menu,
        setMenu,
      }}
    >
      {children}
    </store.Provider>
  );
};

export default Context;
