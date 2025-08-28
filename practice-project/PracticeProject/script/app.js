//  Log in Functionality adding
const logIn = document.getElementById("login-btn");

//   get input data  in html page
const inputMobileNumber = document.getElementById("mobile-number");
const inputPinNumber = document.getElementById("pin-number");

//  default value set
const mobileDefaultValueSet = "01992284845";
const pinNumberDefaultValueSet = "1234";

logIn.addEventListener("click", function (e) {
  e.preventDefault();
  // get input value  in input mobile number
  const inputMobileValue = inputMobileNumber.value.trim();
  const inputPinNumberValue = inputPinNumber.value.trim();

  // if (
  //   inputMobileValue === mobileDefaultValueSet &&
  //   inputPinNumberValue === pinNumberDefaultValueSet
  // ) {
  //   sessionStorage.setItem("isLoggedIn", "true");
  //   window.location.href = "home.html";
  // } else {
  //   alert("Invalid Number and pin\n Please  write a right number and pin");
  // }
  if (inputMobileValue === "" && inputPinNumberValue === "") {
    alert("Please enter your phone number and pin\nTo login your account");
    return;
  }
  if (inputMobileValue.length < 11 || inputMobileValue === "") {
    alert("Invalid Mobile Number");
    console.log("first");

    return;
  }

  if (inputPinNumberValue.length < 4 || inputPinNumberValue.length > 4) {
    alert("Invalid pin Number");
    console.log("second");

    return;
  }

  if (
    inputMobileValue === mobileDefaultValueSet &&
    inputPinNumberValue === pinNumberDefaultValueSet
  ) {
    window.location.href = "home.html";
  }
});

//  main  log out btn click to back login form
