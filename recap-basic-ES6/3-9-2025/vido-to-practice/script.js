const ClickMe = document.getElementById("Click-me");
const divContainer = document.getElementById("divContainer");

const jsonData = () => {
  const jsonData = "https://jsonplaceholder.typicode.com/posts";

  fetch(jsonData)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      getPost(json);
    });
};

const getPost = (post) => {
  // ? step one
  divContainer.innerHTML = "";

  post.forEach((post) => {
    //?   step two create a element
    const postCard = document.createElement("div");

    //  sentence first letter to uppercase
    function capitalizeFirstLetter(sentence) {
      return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    }
    const text = post.title;

    postCard.innerHTML = `
     <div class="post-card">
        <h1>${capitalizeFirstLetter(text)}</h1>
        <p>
          ${post.body}
        </p>
      </div>`;

    divContainer.appendChild(postCard);
  });
};

ClickMe.addEventListener("click", jsonData);
