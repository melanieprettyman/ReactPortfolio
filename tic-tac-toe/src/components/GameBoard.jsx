// The GameBoard component takes two props:
// - onSelectSquare: A function to be called when a square is selected by the player.
// - board: A 2D array representing the current state of the game board.
export default function GameBoard({ onSelectSquare, board }) {
  // The component returns an ordered list (<ol>) that represents the game board.
  return (
    <ol id="game-board">
      {/* The board prop, a 2D array, is mapped over to render each row as an <li> element. */}
      {board.map((row, rowIndex) => (
        // Each row is also an ordered list to maintain the structure of the game board.
        <li key={rowIndex}>
          <ol>
            {/* Inside each row, each cell (playerSymbol) is mapped to render a square as an <li> element. */}
            {row.map((playerSymbol, colIndex) => (
              // Each square is represented by a button.
              <li key={colIndex}>
                <button
                  // When a square is clicked, the onSelectSquare function is called with the row and column index.
                  // This allows the game logic to update the state based on the selected square.
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  // The button is disabled if the square already has a playerSymbol (X or O),
                  // preventing players from selecting an already filled square.
                  disabled={playerSymbol !== null}
                >
                  {/* The playerSymbol (X, O, or null) is displayed inside the button. */}
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
