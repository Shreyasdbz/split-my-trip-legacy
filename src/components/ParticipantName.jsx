import React, { useContext } from "react";

import { ParticipantListContext } from "../context/ParticipantListContext";

const ParticipantName = ({ person }) => {
  const { removeParticipant, findParticipant } = useContext(
    ParticipantListContext
  );

  return (
    <li className="participant-name">
      <div className="participant-list-item">
        <span>{person.name}</span>
        <div className="btn-wrapper">
          <button
            className="participant-list-item-button"
            onClick={() => findParticipant(person.id)}
          >
            <i className="fas fa-pen"></i>
          </button>
          <button
            className="participant-list-item-button"
            onClick={() => removeParticipant(person.id)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

export default ParticipantName;
