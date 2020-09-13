import React, { useContext } from "react";

import { ParticipantListContext } from "../context/ParticipantListContext";
import { ExpenseListContext } from "../context/ExpenseListContext";

const ParticipantName = ({ person }) => {
  const { removeParticipant, findParticipant } = useContext(
    ParticipantListContext
  );
  const { expenses, removeExpense } = useContext(ExpenseListContext);

  const handleRemove = (personID) => {
    //find the expense id that has the payerID === personID
    for (let e = 0; e < expenses.length; e++) {
      if (expenses[e].payerID === personID) {
        removeExpense(expenses[e].id);
      }
    }
    removeParticipant(personID);
  };

  return (
    <li className="list-item  animate-appear">
      <span>{person.name}</span>
      <div className="btn-wrapper">
        <button
          className="content-list-btn"
          onClick={() => findParticipant(person.id)}
        >
          <i className="fas fa-pen"></i>
        </button>
        <button
          className="content-list-btn"
          onClick={() => handleRemove(person.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
};

export default ParticipantName;
