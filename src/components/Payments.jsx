import React from "react";
import ReactDOM from "react-dom";
import { TransitionGroup } from "react-transition-group";

import PaymentDetails from "./PaymentDetails";

const Payments = ({ isShowing, hide, paymentList }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="payments-modal-header">
                <span>Split of the Trip</span>
              </div>
              <div className="payment-details-wrapper">
                <TransitionGroup transitionName="t-appear">
                  {paymentList.map((pay) => {
                    return (
                      <PaymentDetails pay={pay} key={pay.id}></PaymentDetails>
                    );
                  })}
                </TransitionGroup>
              </div>
              <button
                type="button"
                className="modal-close-button"
                data-dismiss="modal"
                onClick={hide}
              >
                Close
              </button>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Payments;
