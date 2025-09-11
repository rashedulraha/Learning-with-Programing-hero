const imgCategory = document.getElementById("img-category");

//  fetch and input data to   img-category  this inner Html

const categoryDataFetch = () => {
  const url = `https://openapi.programming-hero.com/api/peddy/categories`;
  fetch(url)
    .then((Response) => {
      return Response.json();
    })
    .then((json) => {
      console.log(json.categories);
    });
};

categoryDataFetch();
