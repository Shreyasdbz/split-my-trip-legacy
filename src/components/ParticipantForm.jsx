import React, { useContext, useState, useEffect } from "react";
import { ParticipantListContext } from "../context/ParticipantListContext";

const ParticipantForm = () => {
  const { addParticipant, editParticipant, editParticipantItem } = useContext(
    ParticipantListContext
  );

  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editParticipant === null) {
      addParticipant(name);
      setName("");
    } else {
      editParticipantItem(name, editParticipant.id);
    }
  };

  useEffect(() => {
    if (editParticipant !== null) {
      setName(editParticipant.name);
      console.log(editParticipant);
    } else {
      setName("");
    }
  }, [editParticipant]);

  return (
    <form onSubmit={handleSubmit} className="participant-form">
      <input
        onChange={handleChange}
        type="text"
        value={name}
        className="form-add-participant"
        placeholder="Add new person..."
        required
      />
      <div className="fuction-card-button">
        <button>{editParticipant ? "Update" : "Add"}</button>
      </div>
    </form>
  );
};

export default ParticipantForm;
