import Button from "./Button.jsx";
import noProjectImage from "../assets/no-projects.png";

export default function HomePage({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      {/* An image is displayed here. The image is centered and scaled to fit */}
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />

      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one.
      </p>

      {/* onClick event handler set to the onStartAddProject passed as a prop from App() (in App it is handleStartAddProject).
      This button allows the user to initiate the creation of a new project. */}
      <Button onClick={onStartAddProject}> Create a new project </Button>
    </div>
  );
}
