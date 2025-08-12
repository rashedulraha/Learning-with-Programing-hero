const names = [
  "Rashedul",
  "Amin",
  "Karim",
  "Rashedul",
  "Hasan",
  "Rashedul",
  "Sadia",
  "Amin",
  "Karim",
  "Rashedul",
  "Hasan",
  "Amin",
  "Sadia",
  "Karim",
  "Rashedul",
  "Hasan",
  "Amin",
  "Sadia",
  "Karim",
  "Rashedul",
];

function duplicate(names) {
  let including = [];

  for (const include of names) {
    if (including.includes(include) != true) {
      including.push(include);
    }
  }
  return including;
}

const result = duplicate(names);
console.log(result);
