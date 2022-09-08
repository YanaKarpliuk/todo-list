import React from "react";
import "./form.css";

export default function MainForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      id: Math.random(),
      content: e.target.elements.content.value,
      category: e.target.elements.category.value,
      createdAt: new Date().toLocaleString("en-GB", {
        dateStyle: "short",
        timeStyle: "medium",
      }),
      done: false,
      edited: false,
    };

    e.target.reset();
    props.onSubmit(task);
  };

  return (
    <section className="new-task">
      <h1 className="new-task__title">Task List</h1>
      <form id="new-task__form" onSubmit={handleSubmit}>
        <div>
          <h4 className="new-task__form-section">Enter a new task</h4>
          <input
            className="new-task__form-input"
            type="text"
            placeholder="e.g. Walk a dog"
            name="content"
            id="content"
          />
        </div>
        <div>
          <h4 className="new-task__form-section">Pick a category</h4>
          <div className="options">
            <label className="options-info">
              <input
                type="radio"
                name="category"
                id="category1"
                value="business"
              />
              <span className="bubble business"></span>
              <div className="options-info__name">Business</div>
            </label>
            <label className="options-info">
              <input
                type="radio"
                name="category"
                id="category2"
                value="personal"
              />
              <span className="bubble personal"></span>
              <div className="options-info__name">Personal</div>
            </label>
          </div>
        </div>
        <input
          className="new-task__form-submit"
          type="submit"
          value="Add Task"
        />
      </form>
    </section>
  );
}
