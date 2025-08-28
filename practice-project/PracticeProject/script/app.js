const accountBalance = document.getElementById("Balance-amount");
const select = document.getElementById("select");
const addMoney = document.getElementById("add-money");

// !  reusable function  get value start

const getFunction = (id) => {
  const value = document.getElementById(id);
  const idValue = parseInt(value.innerText);
  return idValue;
};

function getValueFunction(id) {
  const inputValue = document.getElementById(id);
  const actualValue = inputValue.value;
  const stringToNumber = parseInt(actualValue);
  return stringToNumber;
}

//  function handle toggle
function handleToggle(id) {
  const mainFrom = document.getElementsByClassName("main-from-section");
  for (const from of mainFrom) {
    from.style.display = "none";
  }

  const target = document.getElementById(id);
  if (target) {
    target.style.display = "block";
  }
}
//!  reusable function end

//? Default values
const defaultBankAccountNumber = 6404674043246540;
const defaultPinNumber = 1234;

// ! addMoney functionality
addMoney.addEventListener("click", (e) => {
  e.preventDefault();

  //  get main account balance
  const mainBalance = getFunction("Balance-amount");
  //  get value  in add input field
  const addBalance = getValueFunction("amount-to-add");
  const validPinNumber = getValueFunction("pin-number");
  const accountNumber = getValueFunction("bank-account-number");

  if (accountNumber === defaultBankAccountNumber) {
  } else {
    alert("please enter your valid bank account number");
    return;
  }

  if (addBalance <= 0) {
    alert("please enter minimum 1$");
    return;
  }

  if (validPinNumber === defaultPinNumber) {
    const mainBalanceUpdate = mainBalance + addBalance;
    accountBalance.innerText = mainBalanceUpdate;
  } else {
    alert("please enter your valid pin");
  }
});

// ! cashOut functionality

const defaultAgentNumber = 13234313743453;
const cashOut = document.getElementById("cash-Out");

cashOut.addEventListener("click", function (e) {
  e.preventDefault();
  const mainBalance = getFunction("Balance-amount");
  const agentNumberValue = getValueFunction("agent-number");
  const withDrawAmount = getValueFunction("with-draw-amount");
  const withDrawPinNumber = getValueFunction("account-pin-number");

  if (agentNumberValue === defaultAgentNumber) {
  } else {
    alert("Enter a valid agent number ");
    return;
  }

  if (withDrawAmount <= 0) {
    alert("please minimum 1$ with draw your account");
    return;
  }

  if (withDrawPinNumber === defaultPinNumber) {
    const mainAccountBalanceUpdate = mainBalance - withDrawAmount;
    accountBalance.innerText = mainAccountBalanceUpdate;
  } else {
    alert("Please enter  your valid pin ");
  }
});

// ! Transfer money functionality

const transferMoneyBtn = document.getElementById("transfer-money-btn");
const defaultUserNumber = 01992284845;

transferMoneyBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const mainBalance = getFunction("Balance-amount");
  const userAccountNumber = getValueFunction("user-number");
  const transferAmount = getValueFunction("amount-to-transfer");
  const accountPinNumber = getValueFunction("account-pin-number");

  if (userAccountNumber === defaultUserNumber) {
  } else {
    alert("Please enter valid  user account number to send your money");
    return;
  }

  if (transferAmount <= 0) {
    alert("please minimum 1$ to send your money");
    return;
  }

  if (accountPinNumber === defaultPinNumber) {
    const mainAccountBalanceUpdate = mainBalance - transferAmount;
    accountBalance.innerText = mainAccountBalanceUpdate;
  } else {
    alert("Please enter valid pin");
  }
});

// ! get bonus  functionality

// !toggle functionality

const addMoneyBtn = document.getElementById("add-money-btn");
const cashOutBtn = document.getElementById("cashOut-btn");
const getBonus = document.getElementById("get-bonus-main-btn");
const transferBtn = document.getElementById("transfer-btn");
const payBillMainBtn = document.getElementById("Pay-Bill-main-btn");

addMoneyBtn.addEventListener("click", function () {
  handleToggle("add-money-section");
});

cashOutBtn.addEventListener("click", function () {
  handleToggle("cashOut-section");
});

transferBtn.addEventListener("click", () => {
  handleToggle("Transfer-money");
});

getBonus.addEventListener("click", () => {
  handleToggle("get-bonus-section");
});

payBillMainBtn.addEventListener("click", () => {
  handleToggle("pay-bill-section");
});
