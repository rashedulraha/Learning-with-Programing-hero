fetch(``)
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    console.log(json);
  })
  .catch((error) => {
    console.error("Error", error);
  });
