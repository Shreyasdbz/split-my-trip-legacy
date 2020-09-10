import React, { useContext, useState, useEffect } from "react";
import { ExpenseListContext } from "../context/ExpenseListContext";

const ExpenseForm = () => {
  const { addExpense, editExpense, editExpenseItem } = useContext(
    ExpenseListContext
  );

  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editExpense === null) {
      addExpense(title);
      setTitle("");
    } else {
      editExpenseItem(title, editExpense.id);
    }
  };

  useEffect(() => {
    if (editExpense !== null) {
      setTitle(editExpense.title);
    } else {
      setTitle("");
    }
  }, [editExpense]);

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        onChange={handleChange}
        type="text"
        value={title}
        className="form-add-expense"
        placeholder="Add new expense..."
        required
      />
      <div className="fuction-card-button">
        <button>{editExpense ? "Update" : "Add"}</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
