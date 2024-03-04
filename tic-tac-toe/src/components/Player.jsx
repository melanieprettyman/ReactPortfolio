// Import the useState hook from React to manage component state.
import { useState } from "react";

export default function Player({
  initialName, // The initial name of the player.
  symbol, // The symbol representing the player, e.g., "X" or "O".
  isActive, // A boolean indicating if it's this player's turn.
  onChangeName, // A function passed from the parent component to handle name changes.
}) {
  // playerName stores the current name of the player. It's initialized with initialName.
  const [playerName, setPlayerName] = useState(initialName);
  // isEditing is a boolean state indicating whether the player's name is currently being edited.
  const [isEditing, setIsEditing] = useState(false);

  // handleEditClick is called when the edit/save button is clicked.
  function handleEditClick() {
    setIsEditing((editing) => !editing); // Toggle the isEditing state.
    if (isEditing) {
      // If switching from editing mode, call onChangeName to update the parent component.
      onChangeName(symbol, playerName);
    }
  }

  // handleChange updates the playerName state as the user types in the input field.
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  // Decide whether to show the player's name as editable (input field) or read-only (span).
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    // If in editing mode, display an input field instead of a static text.
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  // Render the player component.
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}{" "}
        {/* Display the player's name (editable or read-only) */}
        <span className="player-symbol">{symbol}</span>{" "}
        {/* Display the player's symbol */}
      </span>
      {/* A button to toggle editing mode. Its text changes based on isEditing state. */}
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
