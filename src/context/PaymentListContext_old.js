import React, { createContext, useState, useEffect } from "react";
import uuid from "react-uuid";

export const PaymentListContext = createContext();

const PaymentListContextProvider = (props) => {
  const initalState = [];

  const [payments, setPayments] = useState(initalState);

  useEffect(() => {
    localStorage.setItem("payments", JSON.stringify(payments));
  }, [payments]);

  const addPayment = (name, balance, payList, getList) => {
    setPayments([...payments, { name, balance, payList, getList, id: uuid() }]);
  };

  const clearPayments = () => {
    setPayments([]);
  };

  return (
    <PaymentListContext.Provider
      value={{
        payments,
        addPayment,
        clearPayments,
      }}
    >
      {props.children}
    </PaymentListContext.Provider>
  );
};

export default PaymentListContextProvider;
