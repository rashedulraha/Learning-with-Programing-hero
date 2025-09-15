const btn = document.getElementById("btn");
const btn2 = document.getElementById("getData");
const addNumberToLs = () => {
  const number = Math.ceil(Math.random() * 100);
  console.log(number);
  localStorage.setItem("number", number);
};

const getNumberFormLs = () => {
  const getResult = localStorage.getItem("number");
  console.log("form saved local storage", getResult);
};

btn.addEventListener("click", addNumberToLs);
btn2.addEventListener("click", getNumberFormLs);
