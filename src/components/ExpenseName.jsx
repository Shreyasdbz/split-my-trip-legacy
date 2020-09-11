import React, { useContext } from "react";

import { ExpenseListContext } from "../context/ExpenseListContext";
import { ParticipantListContext } from "../context/ParticipantListContext";

const ExpenseName = ({ charge }) => {
  const { removeExpense, findExpense } = useContext(ExpenseListContext);
  const { participants } = useContext(ParticipantListContext);

  const findPayer = () => {
    for (let i = 0; i < participants.length; i++) {
      if (charge.payerID === participants[i].id) {
        return participants[i];
      }
    }
  };
  var payer = findPayer();

  return (
    <li className="expense-name">
      <div className="expense-list-item">
        <span>
          {charge.title}, ${charge.amount} [ {payer.name} ]
          {/* {charge.title}, ${charge.amount} */}
        </span>
        <div className="btn-wrapper">
          <button
            className="expense-list-item-button"
            onClick={() => findExpense(charge.id)}
          >
            <i className="fas fa-pen"></i>
          </button>
          <button
            className="expense-list-item-button"
            onClick={() => removeExpense(charge.id)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

export default ExpenseName;
