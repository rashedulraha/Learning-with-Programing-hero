function add() {
  const result = [...arguments];
  const maxNumber = Math.max(...result);

  console.log(maxNumber);
}

add(12, 12, 45, 45, 56);
