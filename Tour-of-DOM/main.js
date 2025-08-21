const actualFrom = document.querySelector("#actual-from");
const addingContent = document.getElementById("adding-content");
const btn = document.querySelector(".btn");
const inputField = document.querySelector(".input-field");

function addingContentElement() {
  const createElement = document.createElement("li");
  createElement.innerText = inputField.value;
  createElement.classList.add("list-item");

  addingContent.appendChild(createElement);

  inputField.value = "";
}

btn.addEventListener("click", addingContentElement);
