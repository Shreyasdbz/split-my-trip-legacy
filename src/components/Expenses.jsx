import React, { useContext } from "react";
import { ExpenseListContext } from "../context/ExpenseListContext";

import ExpenseName from "./ExpenseName";
import ExpenseForm from "./ExpenseForm";

import AttedanceTable from "./AttedanceTable";

const Expenses = () => {
  const { expenses } = useContext(ExpenseListContext);

  return (
    <div className="content-main">
      <div className="header">
        <span>Expenses</span>
      </div>
      {expenses.length ? (
        <ul className="list">
          {expenses.map((charge) => {
            return <ExpenseName charge={charge} key={charge.id}></ExpenseName>;
          })}
        </ul>
      ) : (
        <div className="noExpenses">
          {/* <span>Please add an expense using the form below</span> */}
        </div>
      )}
      <ExpenseForm></ExpenseForm>
      {!expenses.length ? (
        <div className="noExpenses-table"></div>
      ) : (
        <AttedanceTable></AttedanceTable>
      )}
    </div>
  );
};

export default Expenses;
