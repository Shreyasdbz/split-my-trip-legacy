import React, { useContext } from "react";

import { ParticipantListContext } from "../context/ParticipantListContext";
import { ExpenseListContext } from "../context/ExpenseListContext";

const Calculate = () => {
  const { clearParticipants } = useContext(ParticipantListContext);
  const { clearExpenses } = useContext(ExpenseListContext);

  const handleReset = () => {
    clearParticipants();
    clearExpenses();
  };

  return (
    <div className="calculate-main">
      <div className="card">
        <div className="card-content">
          <button className="calculate">Calculate Transactions!</button>
          <button className="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
