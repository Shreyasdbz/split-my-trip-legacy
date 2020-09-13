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

  var tempID = "";
  var tempName = "";

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
      tempID = participants[0].id;
      tempName = participants[0].name;

      setPayerID(participants[0].id);
    }

    if (editExpense === null) {
      if (tempID !== "" && tempName !== "") {
        addExpense(title, amount, tempID, tempName);
      } else {
        var getName = "";

        for (let i = 0; i < participants.length; i++) {
          if (participants[i].id === payerID) {
            getName = participants[i].name;
          }
        }

        addExpense(title, amount, payerID, getName);
      }

      setTitle("");
      setAmount("");
      setPayerID("");
    } else {
      var getName_edit = "";

      for (let i = 0; i < participants.length; i++) {
        if (participants[i].id === payerID) {
          getName_edit = participants[i].name;
        }
      }

      editExpenseItem(title, amount, payerID, getName_edit, editExpense.id);
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
    <form onSubmit={handleSubmit} className="content-form">
      <label htmlFor="expense-name" className="form-label">
        Title:{" "}
      </label>

      <input
        id="expense-name"
        onChange={handleChange_title}
        type="text"
        value={title}
        autoComplete="off"
        className="content-form-input"
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
        autoComplete="off"
        min="1"
        className="content-form-input content-form-input-number"
        placeholder="Amount..."
        required
      />

      <label htmlFor="expense-paidBy" className="form-label form-label-mid">
        Paid by:{" "}
      </label>

      <select
        id="expense-paidBy"
        onChange={handleChange_payerID}
        className="content-form-input content-form-input-dropdown"
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

      <button onClick={handleSubmit} className="content-form-button">
        {editExpense ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default ExpenseForm;
