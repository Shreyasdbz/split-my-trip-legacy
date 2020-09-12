import React from "react";
import ReactDOM from "react-dom";

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
              <div className="payment-details-wrapper">
                {paymentList.map((pay) => {
                  return (
                    <PaymentDetails pay={pay} key={pay.id}></PaymentDetails>
                  );
                })}
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
