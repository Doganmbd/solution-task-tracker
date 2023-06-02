import React from "react";

const AddTaskForm = () => {
  return (
    <div>
      <form>
        <div className="mb-3">
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
          <input
            type="date"
            className="form-control"
            id="day"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
