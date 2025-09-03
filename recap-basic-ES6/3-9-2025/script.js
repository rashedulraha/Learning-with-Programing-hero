const ClickMe = document.getElementById("Click-me");
const ulContainer = document.getElementById("ulContainer");

const jsonData = () => {
  const jsonData = "https://jsonplaceholder.typicode.com/posts";

  fetch(jsonData)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      showData(json);
    });
};

ClickMe.addEventListener("click", jsonData);
