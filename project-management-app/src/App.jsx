import { useState } from "react";
import NewProject from "./Components/Project Page/NewProject.jsx";
import HomePage from "./Components/HomePage.jsx";
import ProjectsSidebar from "./Components/ProjectsSidebar.jsx";
import Project from "./Components/Project Page/Project.jsx";

function App() {
  // State to manage list of projects, selected project ID, and tasks
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // ID of the currently selected project. (undefined = not adding a new project or selecting an exisiting project, null = adding a new project)
    projects: [], // Array of project objects
    tasks: [], // Array of task objects associated with projects
  });

  // Function to handle adding a new task to the current project
  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random(); // Generate a random ID for the new task
      const newTask = {
        text: text, // Task text from input
        projectId: prevState.selectedProjectId, // Associate project for current task
        id: taskId, // Unique ID for the task
      };

      // Update old state with the new task added to the tasks array
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  // Function to handle deleting a task by its ID
  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      // Filter out the task to be deleted and update the tasks array
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  // Function to update the selected project ID to the project being selected
  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id, // Set the selected project ID
      };
    });
  }

  // Function to prepare the app state for adding a new project (mechanic to switch components)
  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null, // Null indicates that a new project is being added
      };
    });
  }

  // Function to cancel the addition of a new project
  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined, // Switches to HomePage component
      };
    });
  }

  // Function to add a new project to the state project list
  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random(); // Generate a random ID for the new project
      const newProject = {
        ...projectData, // Include the input project data
        id: projectId, // Assign the unique ID to the new project
      };

      // Update state with the new project added to the projects array
      return {
        ...prevState,
        selectedProjectId: undefined, // Reset the selected project ID
        projects: [...prevState.projects, newProject],
      };
    });
  }

  // Function to delete the currently selected project
  function handleDeleteProject() {
    setProjectsState((prevState) => {
      // Filter out the project to be deleted and update the projects array
      return {
        ...prevState,
        selectedProjectId: undefined, // Reset the selected project ID
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId,
        ),
      };
    });
  }

  // Find the currently selected project based on the selectedProjectId state
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId,
  );

  // Determine the content to display based on the state of selectedProjectId
  //Default to displaying a selected Project
  let content = (
    <Project
      project={selectedProject} // Pass the selected project as a prop
      onDelete={handleDeleteProject} // Pass delete handler
      onAddTask={handleAddTask} // Pass add task handler
      onDeleteTask={handleDeleteTask} // Pass delete task handler
      tasks={projectsState.tasks.filter(
        (task) => task.projectId === projectsState.selectedProjectId,
      )} // Pass tasks related to the selected project
    />
  );

  // Conditionally rendering NewProject or HomePage components based on the selectedProjectId state
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <HomePage onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject} // Pass start add project handler
        projects={projectsState.projects} // Pass projects array
        onSelectProject={handleSelectProject} // Pass select project handler
        selectedProjectId={projectsState.selectedProjectId} // Pass the ID of the selected project
      />
      {content} {/*Render the determined content*/}
    </main>
  );
}

export default App;
