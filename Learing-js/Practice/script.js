const form = document.querySelector("#form");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const reset = document.querySelector("#reset");
const calculate = document.querySelector("#calculate");
const bmi = document.querySelector("#bmi");
const desc = document.querySelector("#desc");
const bmiValue = document.querySelector("#bmi-value");

const formInput = (e) => {
  e.preventDefault();
  weight.value = "";
  height.value = "";
  // console.log("Hello world");
};

// const weight = weight.value;
// const height = height.value;
const userValue = (e) => {
  e.preventDefault();

  if (
    (weight.value <= 0 || weight.value === "") &&
    (height.value <= 0 || height.value === "")
  ) {
    bmi.innerHTML = "";
    desc.innerHTML = "";
    bmiValue.innerHTML = "Please enter your valid Weight (KG) and Height (CM)";
    bmiValue.className = `bmi-danger`;

    // console.log("Hello ");
  } else {
    // BMI = weight (kg) / (height (m) * height (m))
    const userWeightResult = weight.value;
    const userHeightResult = height.value;
    const finalBmiResult =
      userWeightResult / (((userHeightResult / 100) * userHeightResult) / 100);

    bmi.innerHTML = finalBmiResult.toFixed(1);
    bmiValue.innerHTML = "Your BMI result is";
    bmiValue.className = `bmi-succeed`;

    //  setTime out
    setTimeout(() => {
      bmiValue.innerHTML = "Your BMI result is";
      bmiValue.className = ``;
    }, 1000);
  }
};

reset.addEventListener("click", formInput);
calculate.addEventListener("click", userValue);
