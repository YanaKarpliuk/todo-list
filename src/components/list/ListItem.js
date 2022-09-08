import React, { useState } from "react";

export default function ListItem(props) {
  const [edit, setEdit] = useState(false);

  const handleDeleteClick = () => {
    props.onRemove(props.task.id);
  };

  const handleEditClick = () => {
    setEdit(true);
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();

    setEdit(false);

    const task = {
      ...props.task, // previous task
      edited: true,
      content: e.target.elements.content.value,
      createdAt: new Date().toLocaleString("en-GB", {
        dateStyle: "short",
        timeStyle: "medium",
      }),
    };

    props.onUpdate(task);
  };

  const handleCheckboxChange = (e) => {
    const task = {
      ...props.task, // previous task
      done: e.target.checked,
    };

    props.onUpdate(task);
  };

  return (
    <li>
      <form
        className={`list-form ${props.task.done ? "done" : ""}`}
        onSubmit={handleSubmitEdit}
      >
        <label className="list-check">
          <input
            type="checkbox"
            defaultChecked={props.task.done}
            onChange={handleCheckboxChange}
          ></input>
          <span
            className={`bubble ${
              props.task.category === "personal" ? "personal" : "business"
            }`}
          ></span>
        </label>
        <div className="task-content">
          <input
            type="text"
            name="content"
            className={`task-content__text ${
              edit ? "task-content__text-edit" : ""
            }`}
            defaultValue={props.task.content}
            readOnly={!edit}
          ></input>
          <div className="task-content__date">
            {props.task.createdAt} {props.task.edited ? "(edited)" : ""}
          </div>
        </div>
        <div className="actions">
          {edit && <button className="actions-btn edit">Save</button>}
          {!edit && (
            <button
              type="button"
              onClick={handleEditClick}
              className="actions-btn edit"
            >
              Edit
            </button>
          )}
          <button
            type="button"
            onClick={handleDeleteClick}
            className="actions-btn delete"
          >
            Delete
          </button>
        </div>
      </form>
    </li>
  );
}
