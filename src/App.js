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
            <div className="App animate-appear-long">
              <Header></Header>
              <div className="content-wrapper">
                <div className="content-container">
                  <Participants></Participants>
                  <Expenses></Expenses>
                </div>
              </div>
              <Calculate></Calculate>
              <div className="footer">
                <span className="footer-label">Created by: </span>
                <span className="footer-name">
                  <a href="http://www.shreyassane.com" className="footer-link">
                    Shreyas Sane
                  </a>
                </span>
                <span className="footer-icon">
                  <a
                    href="https://github.com/Shreyasdbz"
                    className="footer-link"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </span>
                <span className="footer-icon">
                  <a
                    href="http://www.linkedin.com/in/shreyassane"
                    className="footer-link"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </span>
                <span className="footer-icon">
                  <a
                    href="http://www.instagram.com/itShreyas"
                    className="footer-link"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </span>
              </div>
            </div>
          </PaymentListContextProvider>
        </TransactionListContextProvider>
      </ExpenseListContextProvider>
    </ParticipantListContextProvider>
  );
}

export default App;
