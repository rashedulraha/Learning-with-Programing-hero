const getPost = document.getElementById("getPost");

const showPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      printData(json);
    });
};

const printData = (post) => {
  post.forEach((post) => {
    console.log(post);
  });
};

getPost.addEventListener("click", showPost);
