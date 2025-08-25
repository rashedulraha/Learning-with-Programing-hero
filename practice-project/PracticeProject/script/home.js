const accountBalance = document.getElementById("Balance-amount");
const select = document.getElementById("select");
const bankAccountNumber = document.getElementById("bank-account-number");
const accountToAdd = document.getElementById("amount-to-add");
const pinNumber = document.getElementById("pin-number");
const addMoney = document.getElementById("add-money");

// Default values
const defaultBankAccountNumber = "6404674043246540";
const defaultPinNumber = "1234";

addMoney.addEventListener("click", (e) => {
  e.preventDefault();

  //  get main account balance
  const mainBalance = parseInt(accountBalance.innerText);
  //  get value  in add input field
  const addBalance = parseInt(accountToAdd.value);

  // if (
  //   bankAccountNumber.value === defaultLogInMobileNumber &&
  //   pinNumber.value === defaultPinNumber
  // ) {
  //   const mainAccountValueUpdate = mainBalance + addBalance;
  //   accountBalance.innerText = mainAccountValueUpdate;
  // } else {
  //   alert("Please enter your valid  information");
  // }

  if (bankAccountNumber.value === defaultBankAccountNumber) {
  } else {
    alert("please enter your valid bank account number");
    return;
  }

  if (accountToAdd.value <= 0) {
    alert("please enter more then 1$ ");
    return;
  }

  if (pinNumber.value === defaultPinNumber) {
    const mainAccountValueUpdate = mainBalance + addBalance;
    accountBalance.innerText = mainAccountValueUpdate;
    accountBalance.innerText = mainAccountValueUpdate;
  } else {
    alert("please provide your valid pin and ad money");
    return;
  }
});

//  toggle functionality

const addMoneyBtn = document.getElementById("add-money-btn");
const cashOutBtn = document.getElementById("cashOut-btn");

const addMoneySection = document.getElementById("add-money-section");
const cashOutSection = document.getElementById("cashOut-section");
const transferSection = document.getElementById("transfer");

const transferBtn = document.getElementById("transfer-btn");

addMoneyBtn.addEventListener("click", function () {
  addMoneySection.style.display = "block";
  cashOutSection.style.display = "none";
});

cashOutBtn.addEventListener("click", function () {
  cashOutSection.style.display = "block";
  addMoneySection.style.display = "none";
});

transferBtn.addEventListener("click", () => {
  transferSection.style.display = "block";
  addMoneySection.style.display = "none";
});

//  cash   out functionality adding

const agentNumber = document.getElementById("agent-number");
const withDrawAmount = document.getElementById("with-draw-amount");
const cashOut = document.getElementById("cash-Out");

const defaultAgentNumber = "01992284845";

cashOut.addEventListener("click", function (e) {
  e.preventDefault();
  //  get value of amount
  const valueOfAmount = parseInt(withDrawAmount.value.trim());
  console.log(valueOfAmount);

  //   get  account balance  amount
  const mainBalance = parseInt(accountBalance.innerText);
  const mainAccountValueUpdate = mainBalance - valueOfAmount;
  accountBalance.innerText = mainAccountValueUpdate;
});
