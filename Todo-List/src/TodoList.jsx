import React, { useState } from "react";

function TodoList() {

  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Edit Video",
    "Learn DSA",
    "Complete React.js"
  ]);

  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index === 0) return; // cannot move first item up
    const updated = [...tasks];
    [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
    setTasks(updated);
  }

  function moveTaskDown(index) {
    if (index === tasks.length - 1) return; // cannot move last item down
    const updated = [...tasks];
    [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];
    setTasks(updated);
  }

  return (
    <div className="todo-list">
      <h2>To-do List</h2>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
        />

        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>

            <button
              className="delete-button"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>

            <button
              className="move-up-button"
              onClick={() => moveTaskUp(index)}
            >
              👆
            </button>

            <button
              className="move-down-button"
              onClick={() => moveTaskDown(index)}
            >
              ⬇️
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
