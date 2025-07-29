// const price = 3000;

// if (price >= 5000) {
//   // discount  = 10%
//   const discount = (price * 10) / 100;
//   const payAmount = price - discount;
//   console.log(payAmount);
// } else if (price > 2500) {
//   //  discount = 5%
//   const discount = (price * 5) / 100;
//   const payAmount = price - discount;
//   console.log(payAmount);
// } else {
//   console.log(price);
// }

//  ! more example

const personValue = prompt(
  "If your age is under 13, you can eat for free.  \n If your age is between 50 and 59, you get a 25% discount. \n If your age is 60 or above, you get a 50% discount. \n Please enter your valid age:"
);
const foodPrice = 500;

if (personValue <= 12) {
  alert("You can eat for free");
} else if (personValue >= 60) {
  //   discount amount 50%
  const payAmount = (foodPrice * 50) / 100;
  const finalResult = foodPrice - payAmount;
  alert(`you can pay 50% discount your amount is ${finalResult}`);
} else if (personValue >= 50) {
  //  discount = 25%;
  const payAmount = (foodPrice * 25) / 100;
  const finalResult = foodPrice - payAmount;
  alert(`you can pay 25% discount your amount is ${finalResult}`);
} else {
  alert(foodPrice);
}
