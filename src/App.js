import React from "react";

import ParticipantListContextProvider, {
  // eslint-disable-next-line
  ParticipantListContext,
} from "./context/ParticipantListContext";

import ExpenseListContextProvider, {
  // eslint-disable-next-line
  ExpenseListContext,
} from "./context/ExpenseListContext";

import TransactionListContextProvider, {
  // eslint-disable-next-line
  TransactionListContext,
} from "./context/TransactionListContext";

import PaymentListContextProvider, {
  // eslint-disable-next-line
  PaymentListContext,
} from "./context/PaymentListContext";

//Import Components
import Header from "./components/Header";
import Participants from "./components/Participants";
import Expenses from "./components/Expenses";
import Calculate from "./components/Calculate";

function App() {
  return (
    <ParticipantListContextProvider>
      <ExpenseListContextProvider>
        <TransactionListContextProvider>
          <PaymentListContextProvider>
            <div className="App">
              <Header></Header>
              <div className="content-wrapper">
                <div className="content-container">
                  <Participants></Participants>
                  <Expenses></Expenses>
                </div>
              </div>
              <Calculate></Calculate>
            </div>
          </PaymentListContextProvider>
        </TransactionListContextProvider>
      </ExpenseListContextProvider>
    </ParticipantListContextProvider>
  );
}

export default App;
