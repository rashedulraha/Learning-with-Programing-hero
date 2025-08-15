//  ! Question  number one

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

// !   Question number two

function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }

  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result += str[i].toUpperCase();
    }
  }
  return result;
}

// let result = onlyCharacter(true);
// console.log(result);

//  ! Question number three

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

//  ! Question number four

function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

// const result = isSame({ data: [2, 5, 6] }, [2, 5, 6]);
// console.log(result);
