import React, { useContext } from "react";

import { ParticipantListContext } from "../context/ParticipantListContext";

const TableHeader = ({ charge }) => {
  const { participants } = useContext(ParticipantListContext);

  const getPayerName = (id) => {
    for (let p = 0; p < participants.length; p++) {
      if (participants[p].id === id) {
        return participants[p].name;
      }
    }
  };

  const title = charge.title;
  // eslint-disable-next-line
  const amount = charge.amount;
  // eslint-disable-next-line
  const payerName = getPayerName(charge.payerID);

  return <span className="table-header-title">{title}</span>;
};

export default TableHeader;
