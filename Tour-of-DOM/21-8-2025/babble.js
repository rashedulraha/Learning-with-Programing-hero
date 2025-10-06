//  adding element with btn

const btn = document.getElementById("btn");
const textAreaInput = document.getElementById("textarea-input");
const parentDiv = document.getElementById("parent");
const moreChild = document.getElementsByClassName("child");

btn.addEventListener("click", () => {
  // step one

  const inputCollectValue = textAreaInput.value.trim();
  if (inputCollectValue === "" || inputCollectValue.length < 10) {
    alert("please enter  any comment and comment character length 10");
  } else {
    // step two
    const createElementItem = document.createElement("p");

    createElementItem.classList.add("child");
    createElementItem.innerText = inputCollectValue;

    parentDiv.appendChild(createElementItem);
    textAreaInput.value = "";
  }
});

for (const childName of moreChild) {
  childName.addEventListener("click", function (event) {
    console.log(event.target.parentNode);

    event.target.parentNode.removeChild(event.target);
  });
}
