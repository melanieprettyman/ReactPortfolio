// Import necessary React hooks and components.
import { useState } from "react";

// Player, GameBoard, Log, and GameOver are custom React components.
// WINNING_COMBINATIONS contains all possible winning conditions.
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

// Object mapping player symbols to their default names.
const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

// Initial state of the game board, a 3x3 matrix filled with null indicating no moves have been made.
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// Determines which player's turn it is based on the history of game turns.
function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  // If the first turn was made by "X", it's "O"'s turn, and vice versa.
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

// Generates the current state of the game board based on the turns made.
function deriveGameBoard(gameTurns) {
  // Deep copy the initial game board to avoid mutating it directly.
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  // Apply each turn to the game board.
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

// Determines if there's a winner based on the current state of the game board.
function deriveWinner(gameBoard, players) {
  let winner;

  // Check each winning combination.
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    // If all three squares in a combination are filled by the same player, declare that player as the winner.
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  return winner;
}

// Main app component.
function App() {
  // State hooks for managing players, game turns, and other game states.
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  // Derived states for active player, game board configuration, winner, and draw condition.
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner; // A draw occurs if all squares are filled without a winner.

  // Handles a square selection by updating the game turns.
  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      // Prepends the new turn to the turns history.
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  // Resets the game to its initial state.
  function handleRestart() {
    setGameTurns([]);
  }

  // Updates a player's name based on input.
  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  // The JSX structure for rendering the game's UI components.
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {/* Player components for X and O with props for names, symbols, and active states. */}
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {/* GameOver component is displayed if there's a winner or a draw. */}
        {(winner || hasDraw) && (
          <GameOver winner={players[winner]} onRestart={handleRestart} />
        )}
        {/* GameBoard component displays the current state of the game board. */}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      {/* Log component displays the history of game turns. */}
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
