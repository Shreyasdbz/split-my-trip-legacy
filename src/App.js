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
          <div className="App">
            <Header></Header>
            <Participants></Participants>
            <Expenses></Expenses>
            <Calculate></Calculate>
          </div>
        </TransactionListContextProvider>
      </ExpenseListContextProvider>
    </ParticipantListContextProvider>
  );
}

export default App;
