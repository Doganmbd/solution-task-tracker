import React from "react";

const AddTaskForm = () => {
  return (
    <div>
      <form className="fs-3">
        <div className="mb-3 ">
          <label htmlFor="text" className="form-label">
            Task
          </label>
          <input
            type="text"
            className="form-control"
            id="text"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="day" className="form-label">
            Day & Time
          </label>
          <input type="date" className="form-control" id="day" />
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
