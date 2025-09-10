// function loadData() {
//   console.log("one");
//   console.log("two");

//   fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then((res) => {
//       return res;
//     })
//     .then((json) => {
//       console.log("json : ");
//     });
//   console.log("four");
//   console.log("five");
// }

// loadData();

//  using await and async

// async function getUserName() {
//   console.log("one");
//   console.log("two");
//   console.log("three");
//   console.log("four");
//   const url = await fetch(`https://jsonplaceholder.typicode.com/users`);

//   const result = await url.json();
//   console.log(result);

//   console.log("six");
//   console.log("seven");
// }
// getUserName();

// async function getDataInter() {
//   console.log("Hello 1");
//   console.log("Hello 2");
//   console.log("Hello 3");

//   const url = `https://jsonplaceholder.typicode.com/users`;

//   await fetch(url)
//     .then((res) => {
//       return res.json();
//     })
//     .then((json) => {
//       console.log("Hello Json");
//     });
//   console.log("Hello 5");
// }

// getDataInter();

// try {
// } catch (error) {}

const loadData = async () => {
  console.log("Hello world 1");
  console.log("Hello world 2");
  console.log("Hello world 3");

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    console.log("got data", data.length);
  } catch (error) {
    console.log("error Happened", error);
  }
  console.log("Hello world 5");
  console.log("Hello world 6");
};

loadData();
