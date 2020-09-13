import React, { useContext } from "react";

import { ParticipantListContext } from "../context/ParticipantListContext";
import { ExpenseListContext } from "../context/ExpenseListContext";

import TableHeader from "./TableHeader";
import Checkbox from "./Checkbox";

const AttedanceTable = () => {
  const { participants } = useContext(ParticipantListContext);
  const { expenses } = useContext(ExpenseListContext);

  return (
    <table className="table">
      <tbody className="table-body">
        <tr className="table-row table-row-headerRow">
          <th className="emptyText">
            <span>...</span>
          </th>
          {expenses.map((charge) => {
            return (
              <th className="table-row-header" key={charge.id}>
                <TableHeader charge={charge}></TableHeader>
              </th>
            );
          })}
        </tr>
        {participants.map((person) => {
          return (
            <tr key={person.id} className="table-row">
              <td className="table-row-HeaderColumn">
                <span className="table-participantNames">{person.name}</span>
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
  );
};

export default AttedanceTable;
