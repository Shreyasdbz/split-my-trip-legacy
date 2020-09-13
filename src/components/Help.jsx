import React from "react";
import ReactDOM from "react-dom";

const Payments = ({ isShowing, hide }) =>
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
            <div className="modal-help animate-appear-long">
              <div className="instruction-wrapper">
                <span className="number">Step 1.</span>
                <span className="instruction">
                  Enter the names of all the participants.
                </span>
              </div>
              <div className="instruction-wrapper">
                <span className="number">Step 2.</span>
                <span className="instruction">
                  Enter the name of all the expenses, their $ amounts along with
                  who paid for them.
                </span>
              </div>
              <div className="instruction-wrapper">
                <span className="number">Step 3.</span>
                <span className="instruction">
                  Tick the checkbox with the corresponding expense for each
                  person if they participated.
                </span>
              </div>
              <div className="instruction-wrapper">
                <span className="number">Step 4.</span>
                <span className="instruction">
                  Click on "See Who Pays Who" and see the split!
                </span>
              </div>
              <button
                type="button"
                className="help-close-button"
                data-dismiss="modal"
                onClick={hide}
              >
                Close Help
              </button>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Payments;
