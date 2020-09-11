import React, { useContext } from "react";

import Payments from "./Payments";

import { ParticipantListContext } from "../context/ParticipantListContext";
import { ExpenseListContext } from "../context/ExpenseListContext";
import { TransactionListContext } from "../context/TransactionListContext";

import useModal from "./useModal";
import { getPaymentList } from "../compute/buildData";

const Calculate = () => {
  const { participants, clearParticipants } = useContext(
    ParticipantListContext
  );
  const { expenses, clearExpenses } = useContext(ExpenseListContext);
  const { transactions, clearTransactions } = useContext(
    TransactionListContext
  );

  var paymentList = [];

  const handleCalculate = () => {
    paymentList = getPaymentList(participants, expenses, transactions);
    console.log(paymentList);
    toggle();
  };

  const handleReset = () => {
    clearParticipants();
    clearExpenses();
    clearTransactions();
  };

  const { isShowing, toggle } = useModal();

  return (
    <div className="calculate-main">
      <div className="card">
        <div className="card-content">
          <button className="calculate" onClick={handleCalculate}>
            See Who Pays Who
          </button>
          <Payments
            isShowing={isShowing}
            hide={toggle}
            paymentList={paymentList}
          />
          <button className="reset" onClick={handleReset}>
            Reset Everything
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
