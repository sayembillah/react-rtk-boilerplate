import React from "react";
let listStyle = "cursor-pointer hover:bg-white p-2";

const Dropdown = ({ setText }) => {
  return (
    <div className="Dropdown bg-white shadow-2xl absolute top-[100%] right-20">
      <ul className="flex flex-col gap-1">
        <li className={listStyle}>Software</li>
        <li className={listStyle}>Mobile App</li>
        <li className={listStyle}>Website</li>
        <li className={listStyle}>Database</li>
        <button
          onClick={setText("Hello everyone")}
          className="cursor-pointer bg-amber-400"
        >
          Change Text
        </button>
      </ul>
    </div>
  );
};

export default Dropdown;
