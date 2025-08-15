function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }

  let result = "";
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (currentChar !== " ") {
      result += currentChar.toUpperCase();
    }
  }
  return result;
}
