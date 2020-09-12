import React, { useContext } from "react";
import { ParticipantListContext } from "../context/ParticipantListContext";

import ParticipantName from "./ParticipantName";
import ParticipantForm from "./ParticipantForm";

const Participants = () => {
  // const { participants } = useContext(ParticipantListContext);
  const { participants } = useContext(ParticipantListContext);

  return (
    <div className="content-main">
      <div className="header">
        <span>Participants</span>
      </div>
      {participants.length ? (
        <ul className="list">
          {participants.map((person) => {
            return (
              <ParticipantName
                person={person}
                key={person.id}
              ></ParticipantName>
            );
          })}
        </ul>
      ) : (
        <div className="noParticipants"></div>
      )}
      <ParticipantForm></ParticipantForm>
    </div>
  );
};

export default Participants;
