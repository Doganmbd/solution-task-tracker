import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";

const Header = ({ localData, setLocalData }) => {
  const [showAdd, setShowAdd] = useState(false);
  const [change, setChange] = useState({
    name: "SHOW ADD TASK BAR",
    bgColor: "purple",
  });

  const handleClick = () => {
    if (showAdd) {
      setChange({
        name: 'SHOW ADD TASK BAR',
        bgColor: 'purple',
      });
    } else {
      setChange({
        name: 'CLOSE ADD TASK BAR',
        bgColor: 'red',
      });
    }
    setShowAdd(!showAdd);
  };

  return (
    <div className="header">
      <h1>TASK TRACKER</h1>
      <button
      style={{ backgroundColor: change.bgColor }}
        onClick={handleClick}
        className="btn btn-danger btn-lg m-5 shadow p-3 mb-5 "
      >
        {change.name}
      </button>

      {showAdd && (
        <AddTaskForm localData={localData} setLocalData={setLocalData} />
      )}
    </div>
  );
};

export default Header;
