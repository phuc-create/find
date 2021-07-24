import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Ctx } from "./context/Context";

const BoardGame = () => {
  const { initGame } = useContext(Ctx);

  return (
    <div className="boardG nomr">
      <div className="light-ins">
        <Link className="ins-link" to="/new-game">
          New Game
        </Link>
      </div>
      <div className="light-ins">
        <Link className="ins-link" to="/rank">
          Rank
        </Link>
      </div>
      <div className="light-ins">
        <Link className="ins-link" to="/ins">
          Instruction
        </Link>
      </div>
      {/* {initGame && !initGame.start ? (
        <button className="btn-start" onClick={getGame}>
          Start game
        </button>
      ) : (
        <Fragment></Fragment>
      )} */}
      {initGame && initGame.show ? (
        <p style={{ color: "#e74c3c", marginBottom: "10px", fontWeight: 500 }}>
          Previous Number is: {initGame ? initGame.initNumber : 0}!!!
        </p>
      ) : (
        <p style={{ color: "#e74c3c", marginBottom: "10px", fontWeight: 500 }}>
          The number for you is secret!!!
        </p>
      )}
    </div>
  );
};

export default BoardGame;
