import Input from "../Input.jsx";
import { useRef, useState } from "react";

// Define the NewProject component, which handles the creation of a new project.
export default function NewProject({ onAdd, onCancel }) {
  // useRef hooks to reference form inputs directly.
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  // useState hook to manage validation state for each input.
  const [inputError, setInputError] = useState({
    invalidTitle: false,
    invalidDescription: false,
    invalidDueDate: false,
  });

  // Function to handle the saving of a new project.
  function handleSave() {
    // Retrieve input values directly from refs.
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    // Check if any input is empty and update the validation state accordingly.
    const isTitleEmpty = title.trim() === "";
    const isDescriptionEmpty = description.trim() === "";
    const isDueDateEmpty = dueDate.trim() === "";

    // If any input is empty, set inputError state to true for that input.
    if (isTitleEmpty || isDescriptionEmpty || isDueDateEmpty) {
      setInputError({
        invalidTitle: isTitleEmpty,
        invalidDescription: isDescriptionEmpty,
        invalidDueDate: isDueDateEmpty,
      });
      return; // Prevent further execution if there's an error.
    } else {
      // Reset input errors on successful input validation.
      setInputError({ title: false, description: false, dueDate: false });
    }

    // Call onAdd (handleAddTask in App) prop function to add the new project with validated data.
    onAdd({ title, description, dueDate });
  }

  return (
    <div className="w-[35rem] mt-16">
      {/* Menu for Cancel and Save actions */}
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={onCancel}
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        {/* Input components for title, description, and due date with error handling */}
        <Input
          type="text"
          ref={titleRef}
          label="Title"
          error={inputError.invalidTitle}
        />
        <Input
          type="text"
          ref={descriptionRef}
          label="Description"
          textarea
          error={inputError.invalidDescription}
        />
        <Input
          type="date"
          ref={dueDateRef}
          label="Due Date"
          error={inputError.invalidDueDate}
        />
      </div>
    </div>
  );
}
