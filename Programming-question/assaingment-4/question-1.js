//   Question one
function totalFine(fare) {
  if (typeof fare !== "" || fare <= 0) {
    return "Invalid";
  }

  let surcharge = (fare * 20) / 100;
  let total = fare + surcharge + 30;

  return total;
}

console.log(totalFine(50));
