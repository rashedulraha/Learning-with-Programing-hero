function bestTeam(player1, player2) {
  if (
    typeof player1 !== "object" ||
    player1 === null ||
    typeof player2 !== "object" ||
    player2 === null
  ) {
    return "Invalid";
  }

  const violations1 = player1.foul + player1.cardY + player1.cardR;
  const violations2 = player2.foul + player2.cardY + player2.cardR;

  if (violations1 < violations2) {
    return player1.name;
  } else if (violations2 < violations1) {
    return player2.name;
  } else {
    return "Tie";
  }
}

// const result = bestTeam(
//   { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
//   "France"
// );
// console.log(result);
