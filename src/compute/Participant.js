class Participant {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.payedForIDs = [];
    this.attendedList = [];
  }

  addPaidFor(id) {
    this.payedForIDs.push(id);
  }

  addAttended(expense) {
    this.attendedList.push(expense);
  }
}

export default Participant;
