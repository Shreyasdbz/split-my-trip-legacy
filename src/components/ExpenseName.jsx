import React, { useContext } from "react";

import { ExpenseListContext } from "../context/ExpenseListContext";

const ExpenseName = ({ charge }) => {
  const { removeExpense, findExpense } = useContext(ExpenseListContext);

  return (
    <li className="list-item">
      <span>
        {charge.title}, ${charge.amount} [{charge.payerName}]
      </span>
      <div className="btn-wrapper">
        <button
          className="content-list-btn"
          onClick={() => findExpense(charge.id)}
        >
          <i className="fas fa-pen"></i>
        </button>
        <button
          className="content-list-btn"
          onClick={() => removeExpense(charge.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
};

export default ExpenseName;
