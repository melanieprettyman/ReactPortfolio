// The GameOver component accepts two props:
// - winner: The name or identifier of the player who won the game, or null/undefined if the game ended in a draw.
// - onRestart: A function to be called when the user wants to start a new game.
export default function GameOver({ winner, onRestart }) {
  // The component renders a <div> element with the ID "game-over".
  return (
    <div id="game-over">
      {/* A heading indicating the game is over. */}
      <h2>Game Over!</h2>
      {/* If there's a winner, display a message stating who won. The `winner` prop is used to dynamically display the winner's name. */}
      {winner && <p>{winner} won!</p>}
      {/* If there's no winner (indicating a draw), display a message saying "It's a draw!". */}
      {!winner && <p>It&apos;s a draw!</p>}
      {/* A button to restart the game. When clicked, it calls the onRestart function, which is intended to reset the game state and start a new game. */}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
