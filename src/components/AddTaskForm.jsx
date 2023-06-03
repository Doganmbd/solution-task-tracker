import React, { useState } from "react";

const AddTaskForm = ({ localData, setLocalData }) => {
  const [task, setTask] = useState("");
  const [day, setDay] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const newTask = { id: id, task: task, day: day , isDone:false};
    setLocalData([...localData, newTask]);
    setTask("");
    setDay("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="fs-3">
        <div className="mb-3 ">
          <label htmlFor="text" className="form-label">
            Task
          </label>
          <input
            type="text"
            className="form-control"
            id="text"
            aria-describedby="emailHelp"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="day" className="form-label">
            Day & Time
          </label>
          <input
            type="date"
            className="form-control"
            id="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            required
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-info btn-lg mt-5 ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
