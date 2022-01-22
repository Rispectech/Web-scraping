import React from "react";
import "./styles.css";

const EditTask = () => {
  return (
    <div className="container">
      <form className="single-task-form">
        <h4>Edit Task</h4>
        <div className="form-control">
          <label>Task ID</label>
          <p className="task-edit-id"></p>
        </div>
        <div className="form-control">
          <label>
            Name :
            <input type="text" name="name" className="task-edit-name" />
          </label>
        </div>
        <div className="form-control">
          <label>
            completed :
            <input type="checkbox" name="completed" className="task-edit-completed" />
          </label>
        </div>
        <button type="submit" className="block btn task-edit-btn">
          edit
        </button>
        <div className="form-alert"></div>
      </form>
      <a href="index.html" className="btn back-link">
        back to tasks
      </a>
    </div>
  );
};

export default EditTask;
