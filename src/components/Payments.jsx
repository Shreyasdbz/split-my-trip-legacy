import React from "react";
import ReactDOM from "react-dom";

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
              <div className="transactions-list-wrapper">TRANSCATIONS</div>
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
