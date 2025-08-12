const Islam = 223;
const abdullah = 145;
const container = 56;

const result = Math.min(12, 45, 56, 23, 5, 78, 9, 45, 1, 61, 4, 91, 5, 99, 100);
console.log(result);

function findValue(Islam, abdullah, container) {
  if (Islam > abdullah && Islam > container) {
    console.log("islam is the ultimate boos");
  } else if (abdullah > Islam && abdullah > container) {
    console.log("abdullah is the ultimate king and boos");
  } else {
    console.log("container is the ultimate more king boos");
  }
}

findValue(Islam, abdullah, container);
