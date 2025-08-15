// !  create a new uuid
function create_UUID() {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}

const studentsData = [
  {
    id: create_UUID(),
    name: "Rashedul Islam",
    age: 21,
    designation: "software engineer",
    email: "rashedulg@gmail.com",
    phoneNumber: "0174xx83607",
  },
  {
    id: create_UUID(),
    name: "Abdullah",
    age: 22,
    designation: "software engineer",
    email: "abdullah@gmail.com",
    phoneNumber: "017xx383607",
  },
  {
    id: create_UUID(),
    name: "Rabbi",
    age: 21,
    designation: "software engineer",
    email: "rabbi@gmail.com",
    phoneNumber: "017xx383607",
  },
];

// create a new student
studentsData.push({
  id: create_UUID(),
  name: "elon musk",
  age: 21,
  designation: "software engineer",
  email: "mask@gmail.com",
  phoneNumber: "0174xx607",
});

//   update student data

const idToUpdate = "f193144f-022e-4a76-997d-d68f07611471";

const updateData = {
  name: "Habiba akter",
  email: "habiba@gmail.com",
};

const updateIndex = studentsData.findIndex((item) => {
  item.id === idToUpdate;
});

studentsData[updateIndex] = {
  ...studentsData[updateIndex],
  id: idToUpdate,
  ...updateData,
};

console.log(studentsData);
