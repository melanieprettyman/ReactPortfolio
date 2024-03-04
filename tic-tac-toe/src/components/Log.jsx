// The Log component accepts a prop named 'turns', which is expected to be an array of turn objects.
// Each turn object contains information about the player who made the turn and the square they selected.
export default function Log({ turns }) {
  // The component returns an ordered list (<ol>) element with an ID of "log".
  return (
    <ol id="log">
      {/* The 'turns' array is mapped over to generate a list item (<li>) for each turn. */}
      {turns.map((turn) => (
        // Each list item has a unique key constructed by concatenating the row and column indices of the selected square.
        // This assumes that each turn is unique based on the square's position, which is a safe assumption in tic-tac-toe.
        <li key={`${turn.square.row}${turn.square.col}`}>
          {/* The content of each list item describes the turn, indicating which player ('X' or 'O') made the move, and the specific square they selected, identified by its row and column indices. */}
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}
