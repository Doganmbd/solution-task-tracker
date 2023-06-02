import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";

const Header = () => {
  const [showAdd, setShowAdd] = useState(false);

  const handleClick = () => {
    setShowAdd(!showAdd);
  };

  return (
    <div>
      <h1>TASK TRACKER</h1>
      <button onClick={handleClick} className="btn btn-danger">
        CLOSE ADD TASK BAR
      </button>

      {showAdd && <AddTaskForm /> }

      
    </div>
  );
};

export default Header;
