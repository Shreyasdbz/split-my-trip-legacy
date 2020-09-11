import React, { useContext } from "react";

import { ParticipantListContext } from "../context/ParticipantListContext";
import { ExpenseListContext } from "../context/ExpenseListContext";
import useModal from "./useModal";

import Transactions from "./Transactions";

const Calculate = () => {
  const { clearParticipants } = useContext(ParticipantListContext);
  const { clearExpenses } = useContext(ExpenseListContext);

  const handleReset = () => {
    clearParticipants();
    clearExpenses();
  };

  const { isShowing, toggle } = useModal();

  return (
    <div className="calculate-main">
      <div className="card">
        <div className="card-content">
          <button className="calculate" onClick={toggle}>
            Calculate Transactions
          </button>
          <Transactions isShowing={isShowing} hide={toggle} />
          <button className="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
