import React, { useContext } from "react";

import { ParticipantListContext } from "../context/ParticipantListContext";
import { ExpenseListContext } from "../context/ExpenseListContext";

const Checkbox = ({ participantID, expenseID }) => {
  const { participants } = useContext(ParticipantListContext);
  const { expenses } = useContext(ExpenseListContext);

  // const [attendance, setAttendace] = useState("");

  const getParticipantName = (id) => {
    for (let p = 0; p < participants.length; p++) {
      if (participants[p].id === id) {
        return participants[p].name;
      }
    }
  };

  const getExpenseTitle = (id) => {
    for (let e = 0; e < expenses.length; e++) {
      if (expenses[e].id === id) {
        return expenses[e].title;
      }
    }
  };

  const handleChange = (e) => {
    var pName = getParticipantName(participantID);
    var eName = getExpenseTitle(expenseID);

    if (e.target.checked === true) {
      console.log(pName + " participated in " + eName);
    } else {
      console.log(pName + " DID NOT participate in " + eName);
    }
  };

  return (
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        onChange={handleChange}
        className="input-checkbox"
      />
      <span className="checkmark"></span>
    </div>
  );
};

export default Checkbox;
