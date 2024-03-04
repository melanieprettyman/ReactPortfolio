import NewTask from "./NewTask";

// The Tasks component displays a list of tasks and a Comp to add new tasks.
export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />{" "}
      {/* Comp to add new tasks, prop drill handleAddTask from App */}
      {/* If there are tasks in task list, display them with a clear button*/}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>
                {task.text} {/* Display task text */}
              </span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)} // Delete task on click. Prop drill handleDeleteTask from App
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
