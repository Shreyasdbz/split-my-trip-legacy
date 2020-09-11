import React, { createContext, useState, useEffect } from "react";
import uuid from "react-uuid";

export const ExpenseListContext = createContext();

const ExpenseListContextProvider = (props) => {
  const initalState = JSON.parse(localStorage.getItem("expenses")) || [];

  const [expenses, setExpenses] = useState(initalState);

  const [editExpense, setEditExpense] = useState(null);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (title, amount) => {
    setExpenses([...expenses, { title: title, amount: amount, id: uuid() }]);
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

  const editExpenseItem = (title, amount, id) => {
    console.log("Inside Edit: ", id, title, amount);
    const newExpeseList = expenses.map((charge) =>
      charge.id === id ? { title, amount, id } : charge
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
