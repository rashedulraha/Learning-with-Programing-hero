function bestTeam(player1, player2) {
  if (
    typeof player1 !== "object" ||
    typeof player2 !== "object" ||
    player1 === null ||
    player2 === null
  ) {
    return "Invalid";
  }

  let team1Violation = player1.foul + player1.cardY + player1.cardR;
  let team2Violation = player2.foul + player2.cardY + player2.cardR;

  if (team1Violation < team2Violation) {
    return player1.name;
  } else if (team2Violation < team1Violation) {
    return player2.name;
  } else {
    return "Tie";
  }
}
