import React from "react";
import "./styles.css";

const Form = () => {
  return (
    <>
      <form className="task-form">
        <h4>task manager</h4>
        <div className="form-control">
          <input
            type="text"
            name="name"
            className="task-input"
            placeholder="e.g. wash dishes"
          />
          <button type="submit" className="btn submit-btn">
            submit
          </button>
        </div>
        <div className="form-alert"></div>
      </form>
      <section className="tasks-container">
        <p className="loading-text">Loading...</p>
        <div className="tasks"></div>
      </section>
    </>
  );
};

export default Form;
