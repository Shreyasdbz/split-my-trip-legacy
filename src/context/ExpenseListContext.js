import React, { createContext, useState, useEffect, useContext } from "react";
import uuid from "react-uuid";

import { ParticipantListContext } from "../context/ParticipantListContext";

export const ExpenseListContext = createContext();

const ExpenseListContextProvider = (props) => {
  const { participants } = useContext(ParticipantListContext);

  const initalState = JSON.parse(localStorage.getItem("expenses")) || [];

  const [expenses, setExpenses] = useState(initalState);

  const [editExpense, setEditExpense] = useState(null);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (title, amount, payerID) => {
    if (payerID === "" || payerID === null) {
      payerID = participants[0].id;
    }

    setExpenses([
      ...expenses,
      { title: title, amount: amount, payerID: payerID, id: uuid() },
    ]);
  };

  const removeExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const clearExpenses = () => {
    setExpenses([]);
  };

  const findExpense = (id) => {
    const charge = expenses.find((expense) => expense.id === id);

    setEditExpense(charge);
  };

  const editExpenseItem = (title, amount, payerID, id) => {
    const newExpeseList = expenses.map((charge) =>
      charge.id === id ? { title, amount, payerID, id } : charge
    );

    setExpenses(newExpeseList);
    setEditExpense(null);
  };

  return (
    <ExpenseListContext.Provider
      value={{
        expenses,
        addExpense,
        removeExpense,
        clearExpenses,
        findExpense,
        editExpense,
        editExpenseItem,
      }}
    >
      {props.children}
    </ExpenseListContext.Provider>
  );
};

export default ExpenseListContextProvider;
