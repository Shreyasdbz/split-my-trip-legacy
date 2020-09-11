import React, { useContext } from "react";

import { TransactionListContext } from "../context/TransactionListContext";

const Checkbox = ({ participantID, expenseID }) => {
  const { transactions, addTransaction, removeTransaction } = useContext(
    TransactionListContext
  );

  const handleChange = (e) => {
    if (e.target.checked === true) {
      addTransaction(participantID, expenseID);
    } else {
      var tID = "";
      for (let t = 0; t < transactions.length; t++) {
        var trn = transactions[t];
        if (trn.pID === participantID && trn.eID === expenseID) {
          tID = trn.id;
        }
      }
      removeTransaction(tID);
    }
  };

  return (
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        onChange={handleChange}
        className="input-checkbox"
      />
      <span className="checkmark"></span>
    </div>
  );
};

export default Checkbox;
