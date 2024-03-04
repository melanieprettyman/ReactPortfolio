import Tasks from "./Tasks";

// The Project component displays details of a single project, including its tasks.
export default function Project({
  project, // The current project object
  onDelete, // Function to delete the current project
  onAddTask, // Function to add a new task to the project
  onDeleteTask, // Function to delete a task from the project
  tasks, // Array of tasks associated with the project
}) {
  // Format the due date of the project for display
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title} {/* Display project title */}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelete} // Delete project on click (prop drill handleDeleteProject from App)
          >
            Delete
          </button>
        </div>

        <p className="mb-4 text-stone-400">
          {formattedDate} {/* Display formatted due date */}
        </p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description} {/* Display project description */}
        </p>
      </header>

      {/* Task management section. Prop drill handleDeleteTask and Tasks[] from App*/}
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
