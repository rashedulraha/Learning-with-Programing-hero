// const books =

/*
* const perChair = 3 cft;
* const perTable = 10cft ;
* const perBed = 50 cft ;

*/

function getTotalWood(chairQuantity, tableQuantity, bedQuantity) {
  const chair = 3;
  const table = 10;
  const bed = 50;

  const perCft = 1000;

  const chairTotalWood = chair * chairQuantity;
  const tableTotalWood = table * tableQuantity;
  const bedTotalWood = bed * bedQuantity;

  const totalWoodQuantity = chairTotalWood + tableTotalWood + bedTotalWood;

  const totalWoodPrice = totalWoodQuantity * perCft;

  const finalWoodAndPrice = `Your total wood ${totalWoodQuantity} cft and total wood price is ${totalWoodPrice}`;
  return finalWoodAndPrice;
}

const woodResult = getTotalWood(5, 1, 2);
console.log(woodResult);
