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

  return (
    <div className="table-header">
      <div className="charge-title">
        <span>{title}</span>
      </div>
      {/* <div className="charge-amount">
        <span>{amount}</span>
      </div>
      <div className="charge-payer">
        <span>{payerName}</span>
      </div> */}
    </div>
  );
};

export default TableHeader;
