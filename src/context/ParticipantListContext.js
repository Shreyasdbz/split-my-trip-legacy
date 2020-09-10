import React, { createContext, useState, useEffect } from "react";
import uuid from "react-uuid";

export const ParticipantListContext = createContext();

const ParticipantListContextProvider = (props) => {
  const initalState = JSON.parse(localStorage.getItem("participants")) || [];

  const [participants, setParticipants] = useState(initalState);

  const [editParticipant, setEditParticipant] = useState(null);

  useEffect(() => {
    localStorage.setItem("participants", JSON.stringify(participants));
  }, [participants]);

  const addParticipant = (name) => {
    setParticipants([...participants, { name: name, id: uuid() }]);
  };

  const removeParticipant = (id) => {
    setParticipants(participants.filter((person) => person.id !== id));
  };

  const clearParticipants = () => {
    setParticipants([]);
  };

  const findParticipant = (id) => {
    const person = participants.find((participant) => participant.id === id);

    setEditParticipant(person);
  };

  const editParticipantItem = (name, id) => {
    const newParticipantList = participants.map((person) =>
      person.id === id ? { name, id } : person
    );

    setParticipants(newParticipantList);
    setEditParticipant(null);
  };

  return (
    <ParticipantListContext.Provider
      value={{
        participants,
        addParticipant,
        removeParticipant,
        clearParticipants,
        findParticipant,
        editParticipant,
        editParticipantItem,
      }}
    >
      {props.children}
    </ParticipantListContext.Provider>
  );
};

export default ParticipantListContextProvider;
