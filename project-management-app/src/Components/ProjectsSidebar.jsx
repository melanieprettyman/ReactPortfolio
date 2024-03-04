import Button from "./Button";

export default function ProjectsSidebar({
  onStartAddProject, // Function to call when adding a new project
  projects, // Array of project objects
  onSelectProject, // Function to call when a project is selected
  selectedProjectId, // ID of the currently selected project
}) {
  return (
    // The sidebar container with styling applied for width, padding, background color, and text color
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>

      {/* Button to add a new project. Clicking this button calls onStartAddProject */}
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>

      {/* List of projects. Maps over the projects array to dynamically create list items for each project */}
      <ul className="mt-8">
        {projects.map((project) => {
          // Base CSS classes for each project button. Conditional styling is applied based on whether
          // the project is currently selected.
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          // If the project ID matches the selectedProjectId, apply additional styling to highlight it.
          // Otherwise, apply a default style.
          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }

          // Return a list item for each project with a button that, when clicked,
          // calls onSelectProject with the project's ID (which is handleSelectProject in App, so that the selected project is displayed)
          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
