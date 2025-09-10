const getData1 = new Promise((resolved, reject) => {
  const number = Math.random() * 10;
  console.log("generated number1 :", number);

  if (number > 5) {
    resolved({ num: number });
  } else {
    reject({
      error: "data is not available",
    });
  }
});
const getData2 = new Promise((resolved, reject) => {
  const number = Math.random() * 10;
  console.log("generated2 number :", number);

  if (number > 5) {
    resolved({ num: number });
  } else {
    reject({
      error: "data is not available",
    });
  }
});
const getData3 = new Promise((resolved, reject) => {
  const number = Math.random() * 10;
  console.log("generated3 number :", number);

  if (number > 5) {
    resolved({ num: number });
  } else {
    reject({
      error: "data is not available",
    });
  }
});

Promise.all([getData1, getData2, getData3])
  .then((data) => console.log("Promise resolved : ", data))
  .catch((error) => console.log(error));

const promiseOne = new Promise((resolved, reject) => {
  const success = false;
  if (success) {
    resolved("Task done");
  } else reject("something want Wrong");
});

promiseOne
  .then((result) => {
    console.log(result);
  })
  .catch((reject) => {
    console.error(reject);
  })
  .finally(() => {
    console.log("finished checked");
  });

const wait = new Promise((resolved, reject) => {
  setTimeout(() => {
    resolved("2 second later..");
  }, 2000);
});

wait.then((response) => {
  console.log(response);
});
