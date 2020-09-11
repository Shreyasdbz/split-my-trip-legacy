class Expense {
  constructor(title, amount, payerID, id) {
    this.title = title;
    this.amount = amount;
    this.payerID = payerID;
    this.id = id;
    this.participantIDs = [];
  }

  addAttendee(pID) {
    this.participantIDs.push(pID);
  }
}

export default Expense;
