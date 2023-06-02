import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";

const Header = () => {
  const [showAdd, setShowAdd] = useState(false);

  const handleClick = () => {
    setShowAdd(!showAdd);
  };

  return (
    <div className="header">
      <h1>TASK TRACKER</h1>
      <button onClick={handleClick} className="btn btn-danger btn-lg m-5 shadow p-3 mb-5 ">
        CLOSE ADD TASK BAR
      </button>

      {showAdd && <AddTaskForm /> }

      
    </div>
  );
};

export default Header;
