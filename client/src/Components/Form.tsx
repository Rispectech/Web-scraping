import React, { useRef } from "react";
import "./styles.css";

const Form = ({ getScrapeData }: ScrapeType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <form className="task-form">
        <h4>Data Scraper</h4>
        <div className="form-control">
          <input
            type="text"
            name="name"
            className="task-input"
            placeholder="e.g. wash dishes"
            // onChange={(e) => {
            //   e.preventDefault();
            //   console.log((e.target as HTMLInputElement).value);
            //   setFormState((e.target as HTMLInputElement).value);
            // }}
            ref={inputRef}
          />
          <button
            type="submit"
            className="btn submit-btn"
            onClick={(e) => {
              e.preventDefault();
              // console.log(inputRef.current?.value);
              getScrapeData(inputRef.current?.value as string);
            }}
          >
            submit
          </button>
        </div>
        <div className="form-alert"></div>
      </form>
    </>
  );
};

export default Form;
