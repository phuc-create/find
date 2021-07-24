import React from "react";
const ShowAttempt = ({ attemp }) => {
  const sort = attemp.sort((a, b) => b.id - a.id);
  return (
    <div className="attemp-show">
      {sort.length > 0 &&
        sort.map((att) => {
          return (
            <div key={att.id} className="att-guess">
              <span>{att.id}</span>
              <p style={{ fontSize: "30px", fontWeight: "700" }}>
                {att.yourNum}
              </p>
              <p>{att.guess}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ShowAttempt;
