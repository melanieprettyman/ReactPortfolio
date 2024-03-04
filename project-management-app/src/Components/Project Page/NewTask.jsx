import { useState } from "react";

// The NewTask component provides a form for adding a new task.
export default function NewTask({ onAdd }) {
  const [newTask, setNewTask] = useState(""); // State to hold the new task's text

  function handleAddClick() {
    if (newTask.trim() === "") {
      // Prevent adding empty tasks
      return;
    }
    onAdd(newTask); // Call onAdd prop function with new task text. Prop drill of handleAddTask in App
    setNewTask(""); // Reset input field after adding
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)} // Update state with input value
      />

      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleAddClick} // Add new task on click
      >
        Add Task
      </button>
    </div>
  );
}
