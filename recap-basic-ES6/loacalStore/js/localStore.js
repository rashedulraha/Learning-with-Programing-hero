const localStorageSave = document.getElementById("localStorage");
const getItemToLocalStorage = document.getElementById("getItemToLocalStorage");
const setObjectData = document.getElementById("setObjectData");

const saveLocalStorage = () => {
  const randomNumber = Math.ceil(Math.random() * 100 + 1);
  console.log(randomNumber);
  localStorage.setItem("randomNumber", randomNumber);
};

const setObjectToLs = () => {
  const customer = {
    name: "Rahim khalu",
    product: 4,
    price: 75,
  };

  const customerJSON = JSON.stringify(customer);
  localStorage.setItem(customerJSON);
};

const getItemToLocalS = () => {
  const getItem = localStorage.getItem("randomNumber");
  console.log("Get local storage to console data :", getItem);
};

localStorageSave.addEventListener("click", saveLocalStorage);
getItemToLocalStorage.addEventListener("click", getItemToLocalS);
setObjectData.addEventListener("click", setObjectToLs);
