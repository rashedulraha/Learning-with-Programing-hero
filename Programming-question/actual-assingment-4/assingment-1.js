function totalFine(fare) {
  if (typeof fare !== "number" || fare <= 0 || isNaN(fare)) {
    return "Invalid";
  }
  const surcharge = fare * 0.2;
  const serviceCharge = 30;
  const total = fare + surcharge + serviceCharge;
  return total;
}
// const result = totalFine(200);
// console.log(result);
