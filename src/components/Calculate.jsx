import React, { useContext, useState } from "react";

import Payments from "./Payments";

import { ParticipantListContext } from "../context/ParticipantListContext";
import { ExpenseListContext } from "../context/ExpenseListContext";
import { TransactionListContext } from "../context/TransactionListContext";
import { PaymentListContext } from "../context/PaymentListContext";

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
  const { payments, addPayment, clearPayments } = useContext(
    PaymentListContext
  );

  const [isOpen, setIsOpen] = useState(false);

  const handleCalculate = () => {
    var paymentList = getPaymentList(participants, expenses, transactions);

    for (let p = 0; p < paymentList.length; p++) {
      addPayment(
        paymentList[p].name,
        paymentList[p].balance,
        paymentList[p].payList,
        paymentList[p].getList
      );
    }
    toggle();
    setIsOpen(!isOpen);
  };

  const handleCloseModal = () => {
    clearPayments();
    toggle();
    setIsOpen(!isOpen);
  };

  const handleReset = () => {
    clearParticipants();
    clearExpenses();
    clearTransactions();
    clearPayments();
  };

  const { isShowing, toggle } = useModal();

  return (
    <div className="calculate-wrapper">
      <button className="calculate" onClick={handleCalculate}>
        See Who Pays Who
      </button>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
      <Payments
        isShowing={isShowing}
        hide={handleCloseModal}
        paymentList={payments}
      />
    </div>
  );
};

export default Calculate;
