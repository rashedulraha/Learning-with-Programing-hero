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
