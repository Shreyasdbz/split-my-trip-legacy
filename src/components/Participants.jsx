import React, { useContext } from "react";
import { ParticipantListContext } from "../context/ParticipantListContext";

import ParticipantName from "./ParticipantName";
import ParticipantForm from "./ParticipantForm";

const Participants = () => {
  // const { participants } = useContext(ParticipantListContext);
  const { participants } = useContext(ParticipantListContext);

  return (
    <div className="participants-main">
      <div className="card">
        <div className="card-content">
          <div className="function-card-title">
            <span>Participants</span>
          </div>
          <div className="function-card-box">
            <div className="participants-list-wrapper">
              {participants.length ? (
                <ul className="participant-list">
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
                <div className="noParticipants">
                  {/* <span>Please add a person using the form below</span> */}
                </div>
              )}
            </div>
          </div>
          <ParticipantForm></ParticipantForm>
        </div>
      </div>
    </div>
  );
};

export default Participants;
