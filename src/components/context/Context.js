import React, { createContext, useState } from "react";
export const Ctx = createContext();
const Context = ({ children }) => {
  const [initGame, setInitGame] = useState({
    start: false,
    initNumber: 0,
    finish: true,
    show: false,
  });

  const startTheGame = () => {
    let number = Math.random().toString().slice(2, 6);
    console.log(number);
    setInitGame({
      ...initGame,
      start: true,
      initNumber: number,
      finish: false,
      show: false,
    });
  };
  const finishTheGame = () => {
    setInitGame({
      ...initGame,
      start: false,
      number: 0,

      finish: true,
      show: true,
    });
  };
  const exitG = () => {
    setInitGame({
      ...initGame,
      start: false,
      initNumber: 0,
      count: 0,
      finish: true,
      show: false,
    });
  };
  const data = {
    initGame,
    startTheGame,
    finishTheGame,
    exitG,
  };
  return <Ctx.Provider value={data}>{children}</Ctx.Provider>;
};

export default Context;
