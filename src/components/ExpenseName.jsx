import React, { useContext } from "react";

import { ExpenseListContext } from "../context/ExpenseListContext";

const ExpenseName = ({ charge }) => {
  const { removeExpense, findExpense } = useContext(ExpenseListContext);

  return (
    <li className="expense-name">
      <div className="expense-list-item">
        <span>{charge.title}</span>
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
