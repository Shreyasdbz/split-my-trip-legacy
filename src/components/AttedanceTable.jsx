import React, { useContext, useEffect } from "react";
import { buildAllData } from "./buildData";

import { ParticipantListContext } from "../context/ParticipantListContext";
import { ExpenseListContext } from "../context/ExpenseListContext";

import TableHeader from "./TableHeader";
import Checkbox from "./Checkbox";

const AttedanceTable = () => {
  const { participants } = useContext(ParticipantListContext);
  const { expenses } = useContext(ExpenseListContext);

  useEffect(() => {
    buildAllData(participants, expenses);
  });

  return (
    <div className="table-wrapper">
      <div className="table-title">
        <span>
          In the table below, check the appropriate boxes for attendace
        </span>
      </div>
      <table className="att-table">
        <tbody>
          <tr className="att-table-row">
            <th className="emptyText">
              <span>...</span>
            </th>
            {expenses.map((charge) => {
              return (
                <th key={charge.id}>
                  <TableHeader charge={charge}></TableHeader>
                </th>
              );
            })}
          </tr>
          {participants.map((person) => {
            return (
              <tr key={person.id}>
                <td className="person-name">
                  <span>{person.name}</span>
                </td>
                {expenses.map((charge) => {
                  return (
                    <td key={charge.id}>
                      <Checkbox
                        participantID={person.id}
                        expenseID={charge.id}
                      ></Checkbox>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AttedanceTable;
