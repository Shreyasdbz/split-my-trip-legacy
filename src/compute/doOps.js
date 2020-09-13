import uuid from "react-uuid";

export const doOps = (positive, negative) => {
  var finalTranscations = [];
  var printOwes = true;
  // finalTransaction obj data structure:
  // []:
  // id,
  // payerID
  // payerName
  // receiverID
  // receiverName
  // amount

  // console.log("PosList: ", positive, "NegList: ", negative);

  for (let p = 0; p < positive.length; p++) {
    for (let n = 0; n < negative.length; n++) {
      if (
        Math.abs(positive[p].balance) > Math.abs(negative[n].balance) &&
        positive[p].balance !== 0 &&
        negative[n].balance !== 0
      ) {
        //Pos > Neg
        var tempBalance = Math.abs(
          positive[p].balance - Math.abs(negative[n].balance)
        );
        positive[p].balance = tempBalance;
        var oweAmount_neg = negative[n].balance;
        negative[n].balance = 0;

        var obj_a = {
          id: uuid(),
          payerID: negative[n].id,
          payerName: negative[n].name,
          receiverID: positive[p].id,
          receiverName: positive[p].name,
          amount: oweAmount_neg,
        };
        finalTranscations.push(obj_a);

        if (printOwes === true) {
          console.log(
            "CASE 1: " +
              negative[n].name +
              " owes " +
              positive[p].name +
              " amount: " +
              oweAmount_neg
          );
        }
      } else if (
        Math.abs(positive[p].balance) < Math.abs(negative[n].balance) &&
        positive[p].balance !== 0 &&
        negative[n].balance !== 0
      ) {
        var tempBal =
          -1 * Math.abs(positive[p].balance - Math.abs(negative[n].balance));
        negative[n].balance = tempBal;
        var oweAmount = positive[p].balance;
        positive[p].balance = 0;

        var obj_b = {
          id: uuid(),
          payerID: negative[n].id,
          payerName: negative[n].name,
          receiverID: positive[p].id,
          receiverName: positive[p].name,
          amount: oweAmount,
        };
        finalTranscations.push(obj_b);

        if (printOwes === true) {
          console.log(
            "CASE 2: " +
              negative[n].name +
              " owes " +
              positive[p].name +
              " amount: " +
              oweAmount
          );
        }
      } else {
        if (positive[p] !== 0 && negative[n] !== 0) {
          // pos === neg
          var obj_c = {
            id: uuid(),
            payerID: negative[n].id,
            payerName: negative[n].name,
            receiverID: positive[p].id,
            receiverName: positive[p].name,
            amount: positive[p].balance,
          };
          finalTranscations.push(obj_c);

          if (printOwes === true) {
            console.log(
              "CASE 3: " +
                negative[n].name +
                " owes " +
                positive[p].name +
                " amount: " +
                positive[p].balance
            );
          }
          positive[p].balance = 0;
          negative[n].balance = 0;
        }
      }
    }
  }

  return finalTranscations;
};
