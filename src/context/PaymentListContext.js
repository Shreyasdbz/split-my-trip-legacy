import React, { createContext, useState, useEffect } from "react";
import uuid from "react-uuid";

export const PaymentListContext = createContext();

const PaymentListContextProvider = (props) => {
  const initialState = [];

  const [payments, setPayments] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("payments", JSON.stringify(payments));
  }, [payments]);

  const addPayment = (name, balance, payList, getList) => {
    var newPayArray = payments;
    newPayArray.push({ name, balance, payList, getList, id: uuid() });
    setPayments(newPayArray);
  };

  const removePayment = (tID) => {
    setPayments(payments.filter((payment) => payment.id !== tID));
  };

  const clearPayments = () => {
    setPayments([]);
  };

  return (
    <PaymentListContext.Provider
      value={{
        payments,
        addPayment,
        removePayment,
        clearPayments,
      }}
    >
      {props.children}
    </PaymentListContext.Provider>
  );
};

export default PaymentListContextProvider;
