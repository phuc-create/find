import React, { Fragment, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Ctx } from "./context/Context";
import InputNumber from "./InputNumber";

const BoardGame = () => {
  const { initGame, startTheGame, exitG } = useContext(Ctx);
  const [count, setCount] = useState("");
  const checkCount = () => {
    setCount(count + 1);
  };
  const getGame = () => {
    setCount(0);
    startTheGame();
  };
  const exitGame = () => {
    exitG();
  };
  return (
    <div className="boardG">
      <button className="quit-g" onClick={exitGame}>
        Exit
      </button>
      <div className="light-ins">
        <Link className="ins-link" to="/ins">
          Instruction
        </Link>
      </div>
      {initGame && !initGame.start ? (
        <button className="btn-start" onClick={getGame}>
          Start game
        </button>
      ) : (
        <Fragment></Fragment>
      )}
      {initGame && initGame.show ? (
        <p style={{ color: "#e74c3c", marginBottom: "10px", fontWeight: 500 }}>
          The number for you is {initGame ? initGame.initNumber : 0}!!!
        </p>
      ) : (
        <p style={{ color: "#e74c3c", marginBottom: "10px", fontWeight: 500 }}>
          The number for you is secret!!!
        </p>
      )}
      <InputNumber count={count} checkCount={checkCount} />
    </div>
  );
};

export default BoardGame;
