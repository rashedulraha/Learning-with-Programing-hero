const commentSection = document.querySelector(".comment-section");
const submit = document.getElementById("submit");
let commentInput = document.getElementById("comment-input");

//  actual function

submit.addEventListener("click", (event) => {
  event.preventDefault();
  // value validation

  const textValue = commentInput.value.trim();

  if (
    commentInput.value.trim() === "" ||
    commentInput.value.trim().length <= 10
  ) {
    alert("Please enter your any text and text length minimum 10 character");
    return;
  }
  // const textValue = commentInput.value;

  let createElementP = document.createElement("p");
  createElementP.innerText = textValue;
  createElementP.classList.add("comment");

  //  appendChild
  commentSection.appendChild(createElementP);

  commentInput.value = "";
});
