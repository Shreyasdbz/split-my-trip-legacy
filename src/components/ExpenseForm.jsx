import React, { useContext, useState, useEffect } from "react";
import { ExpenseListContext } from "../context/ExpenseListContext";
import { ParticipantListContext } from "../context/ParticipantListContext";

const ExpenseForm = () => {
  const { addExpense, editExpense, editExpenseItem } = useContext(
    ExpenseListContext
  );
  const { participants } = useContext(ParticipantListContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [payerID, setPayerID] = useState("");

  const handleChange_title = (e) => {
    setTitle(e.target.value);
  };
  const handleChange_amount = (e) => {
    setAmount(e.target.value);
  };
  const handleChange_payerID = (e) => {
    setPayerID(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (payerID === "") {
      setPayerID(participants[0].id);
    }

    if (editExpense === null) {
      addExpense(title, amount, payerID);
      setTitle("");
      setAmount("");
      setPayerID("");
    } else {
      editExpenseItem(title, amount, payerID, editExpense.id);
    }
  };

  useEffect(() => {
    if (editExpense !== null) {
      setTitle(editExpense.title);
      setAmount(editExpense.amount);
      setPayerID(editExpense.payerID);
    } else {
      setTitle("");
      setAmount("");
      setPayerID("");
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

      <label htmlFor="expense-paidBy" className="form-label form-label-mid">
        Paid by:{" "}
      </label>

      <select
        id="expense-paidBy"
        onChange={handleChange_payerID}
        className="form-add-expense"
        placeholder="Option1"
        required
      >
        {participants.map((person) => {
          return (
            <option value={person.id} key={person.id}>
              {person.name}
            </option>
          );
        })}
      </select>

      <div className="fuction-card-button">
        <button>{editExpense ? "Update" : "Add"}</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
