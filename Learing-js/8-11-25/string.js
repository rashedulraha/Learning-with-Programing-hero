function cashOut(money) {
  let charge = money * (1.75 / 100);
  let fixedCharge = charge.toFixed(4); //1.7500
  let finalCharge = parseFloat(fixedCharge); //1.75
  return finalCharge;
}
console.log(cashOut(999));
