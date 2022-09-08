import React from "react";
import "./list.css";
import ListItem from "./ListItem";

export default function List(props) {
  if (!props.tasks.length)
    return (
      <section className="task-section">
        <h3>No Tasks</h3>
      </section>
    );

  return (
    <section className="task-section">
      <h3>Tasks</h3>
      <ul id="task-list">
        {props.tasks.map((task) => (
          <ListItem
            key={task.id}
            task={task}
            onRemove={props.onRemove}
            onUpdate={props.onUpdate}
          />
        ))}
      </ul>
    </section>
  );
}
