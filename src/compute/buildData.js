import Participant from "./Participant";
import Expense from "./Expense";

// Payment List Data Structure Breakdown:
// []:
// Name
// Balance
//   -------PayList----------
//      {payToName, payAmount}
//   -------GetList----------
//      {getFromName, getAmount}

export const getPaymentList = (participants, expenses, transactions) => {
  var expenseList = [];
  var participantList = [];
  var paymentList = [];

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

  //Step3: Build a Payment List ------------------------

  for (let i = 0; i < participantList.length; i++) {
    var pn = participantList[i];

    var name = pn.name;
    var balance = 0;
    var payList = [];
    var getList = [];

    var pay = { name, balance, payList, getList };
    paymentList.push(pay);
  }

  return paymentList;
};
