import React, { createContext, useState, useEffect } from "react";
import uuid from "react-uuid";

export const TransactionListContext = createContext();

const TransactionListContextProvider = (props) => {
  const initialState = [];

  const [transactions, setTransactions] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (pID, eID) => {
    if (pID === "" || eID === "" || pID === null || eID === null) {
      console.log("Invalid pID or eID! pID: " + pID + " eID: " + eID);
    } else {
      setTransactions([...transactions, { pID: pID, eID: eID, id: uuid() }]);
    }
  };

  const removeTransaction = (tID) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== tID)
    );
  };

  const clearTransactions = () => {
    setTransactions([]);
  };

  return (
    <TransactionListContext.Provider
      value={{
        transactions,
        addTransaction,
        removeTransaction,
        clearTransactions,
      }}
    >
      {props.children}
    </TransactionListContext.Provider>
  );
};

export default TransactionListContextProvider;
