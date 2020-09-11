import React, { useContext, useState, useEffect } from "react";
import { ExpenseListContext } from "../context/ExpenseListContext";

const ExpenseForm = () => {
  const { addExpense, editExpense, editExpenseItem } = useContext(
    ExpenseListContext
  );

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleChange_title = (e) => {
    setTitle(e.target.value);
  };
  const handleChange_amount = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editExpense === null) {
      addExpense(title, amount);
      setTitle("");
      setAmount("");
    } else {
      editExpenseItem(title, amount, editExpense.id);
    }
  };

  useEffect(() => {
    if (editExpense !== null) {
      setTitle(editExpense.title);
      setAmount(editExpense.amount);
    } else {
      setTitle("");
      setAmount("");
    }
  }, [editExpense]);

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <label htmlFor="expense-name" className="form-label">
        Title:{" "}
      </label>

      <input
        id="expense-name"
        onChange={handleChange_title}
        type="text"
        value={title}
        className="form-add-expense"
        placeholder="Add new expense..."
        required
      />

      <label htmlFor="expense-amount" className="form-label form-label-mid">
        $:{" "}
      </label>

      <input
        id="expense-amount"
        onChange={handleChange_amount}
        type="number"
        value={amount}
        className="form-add-expense"
        placeholder="Expense amount"
        required
      />

      <div className="fuction-card-button">
        <button>{editExpense ? "Update" : "Add"}</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
