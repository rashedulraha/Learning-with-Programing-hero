const loadData = () => {
  const jsonData = "https://openapi.programming-hero.com/api/levels/all";

  fetch(jsonData)
    .then((Response) => {
      return Response.json();
    })
    .then((json) => {
      displayLessons(json.data);
    });
};

// ?  loadLevelWord function

const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;

  fetch(url)
    .then((Response) => {
      return Response.json();
    })
    .then((json) => {
      displayLevelWord(json.data);
    });
};

//!  get id to index.html file

const wordContainer = document.getElementById("word-container");

const displayLevelWord = (jsonData) => {
  wordContainer.innerHTML = "";

  jsonData.forEach((lessonsWord) => {
    console.log(lessonsWord);

    const divBox = document.createElement("div");
    divBox.innerHTML = ` <div class="bg-white px-5 py-10 rounded-lg text-center">
          <h3 class="text-2xl font-bold capitalize mb-2">${lessonsWord.word}</h3>
          <p class="capitalize text-lg font-normalmb-1 font-bold">
            Meaning : <span class="font-normal hing-siliguri">${lessonsWord.meaning}</span>
          </p>
          <p class="capitalize text-lg font-normalmb-1 font-bold">
            pronunciation : <span class="font-normal hing-siliguri">${lessonsWord.pronunciation}</span>
          </p>

          <div class="flex items-center justify-around mt-5 font-semibold">
            <button class="btn hover:bg-blue-400 transition-all  text-blue-600 hover:text-white"><i class="bi bi-question-circle-fill text-xl cursor-pointer  "></i></button>
            <button class="btn hover:bg-blue-400 transition-all  text-blue-600 hover:text-white">
            <i class="bi bi-volume-up-fill text-xl cursor-pointer"></i></button>
            
          </div>
        </div>`;
    wordContainer.appendChild(divBox);
  });
};

//!  get id  to index.html file
const lavalContainer = document.getElementById("laval-container");

const displayLessons = (lessons) => {
  lavalContainer.innerHTML = "";

  lessons.forEach((itemLessons) => {
    const btnDiv = document.createElement("div");

    btnDiv.innerHTML = `<button onclick="loadLevelWord(${itemLessons.level_no})" class="btn btn-outline btn-primary "> <i class="bi bi-book-fill"></i>lessons - ${itemLessons.level_no}</button>`;

    // !  appendChild
    lavalContainer.appendChild(btnDiv);
  });
};

loadData();
