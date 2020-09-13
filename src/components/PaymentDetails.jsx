import React from "react";

const PaymentDetails = ({ pay }) => {
  const payList = pay.payList || [];
  const getList = pay.getList || [];

  const checkLists = (payList, getList) => {
    // console.log(pay.name + "'s lists: ", payList, getList);
    if (payList.length < 1 && getList.length < 1) {
      return undefined;
    } else {
      return payList || getList;
    }
  };

  const hasLists = checkLists(payList, getList);

  return (
    <div className="payment-card animate-appear-long">
      <div className="header">
        <div className="name">
          <span className="name-label">Transcations for: </span>
          <span className="name-value ">{pay.name}</span>
        </div>
        <div className="balance">
          <span className="balance-label">Ending balance: </span>
          {pay.balance >= 0 ? (
            <span className="balance-value">+ ${pay.balance}</span>
          ) : (
            <span className="balance-value">- ${Math.abs(pay.balance)}</span>
          )}
        </div>
      </div>
      <div className="break-line-wrapper">
        <hr className="break-line" />
      </div>
      {!hasLists ? (
        <div className="payment-card-noTransactions">
          <span>You have nothing to do!</span>
        </div>
      ) : (
        <div className="payments">
          <div className="payment-lines">
            {payList === undefined ? (
              <div></div>
            ) : (
              <div className="payments-pay">
                {payList.map((trn) => {
                  return (
                    <div key={trn.id} className="payment-line">
                      <span className="label">Pay</span>
                      <span className="name">{trn.name}</span>
                      <span className="label label-middle">: $</span>
                      <span className="amount">{trn.amount}</span>
                    </div>
                  );
                })}
              </div>
            )}
            {getList === undefined ? (
              <div></div>
            ) : (
              <div className="payments-get">
                {getList.map((trn) => {
                  return (
                    <div key={trn.id} className="payment-line">
                      <span className="label">Receive from</span>
                      <span className="name">{trn.name}</span>
                      <span className="label label-middle">: $</span>
                      <span className="amount">{trn.amount}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentDetails;
