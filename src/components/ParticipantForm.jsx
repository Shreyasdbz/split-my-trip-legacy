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
    } else {
      setName("");
    }
  }, [editParticipant]);

  return (
    <form onSubmit={handleSubmit} className="content-form">
      <label htmlFor="content-form-label" className="form-label">
        Participant Name:{" "}
      </label>
      <input
        id="participant-name"
        onChange={handleChange}
        type="text"
        value={name}
        autocomplete="off"
        className="content-form-input"
        placeholder="Add new participant......"
        required
      />
      <button className="content-form-button">
        {editParticipant ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default ParticipantForm;
