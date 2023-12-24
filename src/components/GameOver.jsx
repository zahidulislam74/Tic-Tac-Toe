import React from "react";

const GameOver = ({ winner, onRestart }) => {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} Won!</p>}
      {!winner && <p>It&apos;s a Draw</p>}
      <p>
        <button onClick={onRestart}>Play Again</button>
      </p>
    </div>
  );
};

export default GameOver;
