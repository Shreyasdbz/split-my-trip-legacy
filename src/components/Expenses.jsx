import React, { useContext } from "react";
import { ExpenseListContext } from "../context/ExpenseListContext";

import ExpenseName from "./ExpenseName";
import ExpenseForm from "./ExpenseForm";

const Expenses = () => {
  // const { participants } = useContext(ParticipantListContext);
  const { expenses } = useContext(ExpenseListContext);

  return (
    <div className="expenses-main">
      <div className="card">
        <div className="card-content">
          <div className="function-card-title">
            <span>Expenses</span>
          </div>
          <div className="function-card-box">
            <div className="expenses-list-wrapper">
              {expenses.length ? (
                <ul className="expense-list">
                  {expenses.map((charge) => {
                    return (
                      <ExpenseName
                        charge={charge}
                        key={charge.id}
                      ></ExpenseName>
                    );
                  })}
                </ul>
              ) : (
                <div className="noExpenses">
                  {/* <span>Please add an expense using the form below</span> */}
                </div>
              )}
            </div>
          </div>
          <ExpenseForm></ExpenseForm>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
