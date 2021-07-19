import React, { useState, Fragment, useContext, useEffect } from "react";
import { Ctx } from "./context/Context";
import ShowAttempt from "./ShowAttempt";

const InputNumber = ({ count, checkCount }) => {
  const { initGame, finishTheGame } = useContext(Ctx);
  const [number, setNumber] = useState("0000");
  const [attemp, setAttemp] = useState([]);
  let num = initGame ? initGame.initNumber : 0;
  console.log(initGame);
  useEffect(() => {
    if (initGame.finish) {
      setAttemp([]);
      setNumber(0);
    }
  }, [initGame.finish]);
  const handleControlNumber = (e) => {
    if (e.target.value.length <= 4) {
      setNumber(e.target.value);
    }
  };
  //CREATE SPLIT FUNCTION TO GET SINGLE NUMBER TO CHECK
  console.log(count);
  const checkResult = (e) => {
    e.preventDefault();
    checkCount();
    const arrInitNumber = num.split("");
    const arrYourNumber = number.toString().split("");
    console.log(arrInitNumber, arrYourNumber);
    //CHECK RETURN FALSE IF INPUT INCORRECT LENGTH OF NUMBER
    if (number.length < 4 || arrYourNumber.indexOf(".") >= 0) {
      alert("Typing number only,Pls!!!");
      return false;
    }
    //DEFAULT VALUE OF BLUE AND RED POINTS
    let blue = 0;
    let red = 0;
    //
    //
    //CHECK 1
    if (arrInitNumber.toString() === arrYourNumber.toString()) {
      finishTheGame();
    }
    //
    //
    //CHECK 2 --INDEX OF CORRECT --RED POINT
    arrInitNumber.forEach((key, index) => {
      if (arrInitNumber[index] === arrYourNumber[index]) {
        red = red + 1;
        arrInitNumber[index] = "X";
        arrYourNumber[index] = "Z";
      }
    });
    console.log(arrInitNumber, arrYourNumber);
    //CHECK 3 --INDEX OF DIFFRERENTS --BLUE POINT

    arrInitNumber.forEach(function (key, index) {
      console.log(arrInitNumber.indexOf(arrYourNumber[index]));
      if (arrInitNumber.indexOf(arrYourNumber[index]) >= 0) {
        arrInitNumber[arrInitNumber.indexOf(arrYourNumber[index])] = "";
        blue = blue + 1;
      }
    });
    console.log(arrInitNumber, arrYourNumber);
    //SET SINGLE GET EVERY TIME YOU GUESS NUMBER

    setAttemp([
      ...attemp,
      {
        id: attemp.length + 1,
        yourNum: number,
        guess: `${red} Reds AND ${blue} Blues`,
      },
    ]);
    setNumber("");
  };
  return (
    <Fragment>
      {initGame && initGame.start ? (
        <form onSubmit={checkResult}>
          <input
            type="number"
            value={number}
            pattern="[0-9]"
            onChange={handleControlNumber}
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "0000")}
            maxLength="4"
            placeholder="0000"
          />
        </form>
      ) : (
        ""
      )}

      {initGame && initGame.finish && initGame.initNumber > 0 ? (
        <div className="winner">
          YOU ARE FINISHED THE GAME WITH {count} GUESS
        </div>
      ) : (
        <Fragment></Fragment>
      )}

      <ShowAttempt attemp={attemp} />
    </Fragment>
  );
};

export default InputNumber;
