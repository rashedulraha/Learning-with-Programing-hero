//  5 way to select  element html

/*
 * Number one = getElementById
 * Number two = getElementByClassName
 * Number three = getElementByTagName
 * Number four = querySelector
 * Number five = querySelectorAll
 */

//  Examples Number one

// const getElementById = document.getElementById("myHeading");
// console.log(getElementById.innerText);

// Examples Number two

// const getElementByClassName = document.getElementsByClassName("list-item");
// console.log(getElementByClassName);

//  Examples Number three
// const getElementBy = document.getElementByTagName("p");
// console.log(getElementBy);

// const paragraphs = document.getElementByTagName("p");
// console.log(paragraphs);

//  matching element

// const firstElement = document.querySelector(".list-item");
// console.log(firstElement[0]);

// const myBtn = document.querySelector("#myBtn");
// console.log(myBtn.innerHTML);
// myBtn.innerHTML = "Submit Anything";
// console.log(myBtn.innerHTML);
// myBtn.style.color = "red";
// myBtn.style.padding = "10px";

// function helloWorld() {
//   console.log("hello world");
// }

// myBtn.addEventListener("click", helloWorld);

// const text = document.querySelector(".text");

// text.innerHTML = "<b> My name is Rashedul Islam </b>";

// const myImage = document.querySelector("#myImage");

// myImage.setAttribute(
//   "src",
//   "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/b7/3e/96.jpg"
// );
// myImage.classList.remove("img-nothing");
// myImage.classList.add("img-nothing");

// //  document appendChild
// let container = document.querySelector(".container");
// const createElement = document.createElement("h1");
// createElement.innerText = "Hello  I'm frontend designer and developer ";
// createElement.classList.add("text-content");
// createElement.addEventListener("click", function () {
//   alert("click me");
// });

// container.appendChild(createElement);
