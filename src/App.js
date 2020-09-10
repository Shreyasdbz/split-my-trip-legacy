import React from "react";

import ParticipantListContextProvider, {
  ParticipantListContext,
} from "./context/ParticipantListContext";

import ExpenseListContextProvider, {
  ExpenseListContext,
} from "./context/ExpenseListContext";

//Import Components
import Header from "./components/Header";
import Participants from "./components/Participants";
import Expenses from "./components/Expenses";
import Calculate from "./components/Calculate";

function App() {
  return (
    <ParticipantListContextProvider>
      <ExpenseListContextProvider>
        <div className="App">
          <Header></Header>
          <Participants></Participants>
          <Expenses></Expenses>
          <Calculate></Calculate>
        </div>
      </ExpenseListContextProvider>
    </ParticipantListContextProvider>
  );
}

export default App;
