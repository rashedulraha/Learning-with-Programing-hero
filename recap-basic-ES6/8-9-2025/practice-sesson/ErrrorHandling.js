// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("You cannot divide by zero!");
//   }
//   return a / b;
// }

// try {
//   console.log(divide(10, 2));
//   console.log(divide(10, 0));
// } catch (Error) {
//   console.log("Error caught:", error.message);
// }

async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Failed to fetch users. Server error!");
    }

    const data = await response.json();
    displayData(data);
    // console.log("Users:", data);
  } catch (error) {
    console.log("Something went wrong:", error.message);
    document.body.innerHTML =
      "<h3>❌ Failed to load data. Please try again later.</h3>";
  }
}

getUsers();

function displayData(item) {
  item.forEach((singleItem) => {
    console.log(singleItem.title);
  });
}
