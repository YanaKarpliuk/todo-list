import React, { useEffect, useState } from "react";
import { Notify } from "notiflix";
import Form from "./components/form/Form";
import List from "./components/list/List";

const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const sortedTasks = tasks.sort(byDate);

  const addTask = (task) => {
    if (task.content === "") {
      Notify.failure("Please enter a new task");
    } else if (task.category === "") {
      Notify.failure("Please pick a category");
    } else {
      Notify.success("New task added");
      setTasks((prev) => [...prev, task]);
    }
  };

  const updateTask = (task) => {
    setTasks((prev) => {
      return prev.map((item) => {
        return item.id === task.id ? task : item;
      });
    });
  };

  const removeTask = (taskId) => {
    setTasks((prev) => {
      return prev.filter((item) => {
        return item.id !== taskId;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <Form onSubmit={addTask} />
      <List tasks={sortedTasks} onRemove={removeTask} onUpdate={updateTask} />
    </div>
  );
}

export default App;

function byDate(a, b) {
  const dateA = new Date(a.createdAt);
  const dateB = new Date(b.createdAt);

  if (dateA < dateB) {
    return 1;
  }

  if (dateA > dateB) {
    return -1;
  }

  return 0;
}
