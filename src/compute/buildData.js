import uuid from "react-uuid";

import { doOps } from "./doOps";

import Participant from "./Participant";
import Expense from "./Expense";

// Payment List Data Structure Breakdown:
// []:
// Name,
// Balance,
//   payList:
//      []:
//      {payToName, payAmount}
//   getList:
//      []:
//      {getFromName, getAmount}
// id

export const getPaymentList = (participants, expenses, transactions) => {
  var debug = false;

  var expenseList = [];
  var participantList = [];
  var paymentList = [];
  var finalTranscations = [];

  var positiveList = [];
  var negativeList = [];

  //Step1: Build an Expense List -----------------------

  //    GatherInitial Expenses
  for (let e = 0; e < expenses.length; e++) {
    var charge = expenses[e];
    expenseList.push(
      new Expense(charge.title, charge.amount, charge.payerID, charge.id)
    );
  }
  //    Fill participantIDs for each expense by each transaction
  for (let t = 0; t < transactions.length; t++) {
    var trn = transactions[t];
    var pID = trn.pID;
    var eID = trn.eID;
    //      Find from expenseList by eID then add pID(s) to the participantIDs
    for (let e = 0; e < expenseList.length; e++) {
      var exp = expenseList[e];
      if (exp.id === eID) {
        //check if already exists
        if (!exp.participantIDs.includes(pID)) {
          exp.addAttendee(pID);
        }
      }
    }
  }

  //Step2: Build a Participant List --------------------

  //    Gather Initial Participants
  for (let p = 0; p < participants.length; p++) {
    var person = participants[p];
    participantList.push(new Participant(person.name, person.id));
  }
  //    Fill attendedList and payedForList by each transaction
  for (let r = 0; r < participantList.length; r++) {
    var per = participantList[r];
    for (let n = 0; n < expenseList.length; n++) {
      var expn = expenseList[n];
      if (expn.participantIDs.includes(per.id)) {
        per.addAttended(expn);
      }
      if (expn.payerID === per.id) {
        per.addPaidFor(expn.id);
      }
    }
  }

  //Step3: Build a Positive/Negative List ------------------------

  for (let r = 0; r < participantList.length; r++) {
    var init_with_zero = 0;

    var pn = participantList[r];
    var balance_amount = Number(init_with_zero);
    var splitsTotal = Number(init_with_zero);
    var paidForTotal = Number(init_with_zero);

    for (let t = 0; t < pn.attendedList.length; t++) {
      splitsTotal +=
        pn.attendedList[t].amount / pn.attendedList[t].participantIDs.length;
    }

    for (let y = 0; y < pn.payedForIDs.length; y++) {
      var pyID = pn.payedForIDs[y];

      for (let ex = 0; ex < expenseList.length; ex++) {
        if (expenseList[ex].id === pyID) {
          paidForTotal += parseFloat(expenseList[ex].amount);
        }
      }
    }

    var balance_raw = paidForTotal - splitsTotal;
    balance_amount = Math.round(balance_raw * 100) / 100;

    var obj = {
      id: participantList[r].id,
      name: participantList[r].name,
      balance: balance_amount,
    };

    if (balance_amount >= 0) {
      positiveList.push(obj);
      if (debug === true) {
        console.log("Pushing to pos: ", obj);
      }
    } else {
      negativeList.push(obj);
      if (debug === true) {
        console.log("Pushing to neg: ", obj);
      }
    }

    pn.balance = balance_amount;
  }

  finalTranscations = doOps(positiveList, negativeList);

  //Step3: Build a Payment List ------------------------

  for (let i = 0; i < participantList.length; i++) {
    var ptc = participantList[i];

    var name = ptc.name;
    var balance = ptc.balance;
    var payList = [];
    var getList = [];

    if (finalTranscations !== undefined) {
      for (let f = 0; f < finalTranscations.length; f++) {
        var ft = finalTranscations[f];
        if (ft.amount !== 0) {
          //round up amount
          var amount_raw = ft.amount;
          ft.amount = Math.round(amount_raw * 100) / 100;

          if (ft.payerID === ptc.id) {
            var payItem = {
              name: ft.receiverName,
              amount: Math.abs(ft.amount),
              id: uuid(),
            };
            payList.push(payItem);
          } else if (ft.receiverID === ptc.id) {
            var getItem = {
              name: ft.payerName,
              amount: Math.abs(ft.amount),
              id: uuid(),
            };
            getList.push(getItem);
          }
        }
      }
    }

    var pay = { name, balance, payList, getList, id: uuid() };
    paymentList.push(pay);
  }

  return paymentList;
};
