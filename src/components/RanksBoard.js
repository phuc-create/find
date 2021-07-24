import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRankClientByLevel } from "../redux/actions/rank.actions";

const RanksBoard = () => {
  const dispatch = useDispatch();
  const [level, setLevel] = useState(4);
  const { ranks } = useSelector((state) => state.ranks);
  const newRank = ranks.sort((a, b) => a.numberOfguess - b.numberOfguess);
  const setLevelOfRank = (e) => {
    setLevel(e.target.value);
  };
  useEffect(() => {
    dispatch(getRankClientByLevel(level >= 4 ? level : 10));
  }, [dispatch, level]);
  return (
    <div className="boardG nomr">
      <div className="find-by-rank">
        <div className="f-txt">Find rank by level</div>
        <input
          type="number"
          min="4"
          max="10"
          value={level}
          onChange={setLevelOfRank}
        />
      </div>
      <div className="r-head">
        <span>Rank</span>
        <span>User</span>
        <span>Guess</span>
      </div>
      <div className="r-s">
        {newRank.length > 0 ? (
          newRank.map((rank, index) => {
            return (
              <div className="r-s-w" key={rank._id}>
                <span>{index + 1}</span>
                <span>{rank.user}</span>
                <span>{rank.numberOfguess}</span>
              </div>
            );
          })
        ) : (
          <p style={{ color: "white", marginTop: 20 }}>
            "Opp...Not any user at this rank"
          </p>
        )}
      </div>
    </div>
  );
};

export default RanksBoard;
