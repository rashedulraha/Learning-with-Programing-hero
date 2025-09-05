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

//!  remove all btn classList = "active"

const removeAtieve = () => {
  const removeActive = document.querySelectorAll(".lessons-btn");
  removeActive.forEach((btn) => {
    btn.classList.remove("active");
  });
};

//  ! load level world
const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;

  fetch(url)
    .then((Response) => {
      return Response.json();
    })
    .then((json) => {
      removeAtieve();
      const clickBtn = document.getElementById(`loadLevelWord${id}`);
      clickBtn.classList.add("active");

      //  ?call a display learn word
      displayLevelWord(json.data);
    });
};

//  !load world deteils
const loadeWordDeteils = async (id) => {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;

  const Response = await fetch(url);
  const deteils = await Response.json();
  console.log(deteils.data);
};

//  display world deteils
const displayDeteils = (word) => {
  console.log(word);
};
//!  get id to index.html file

/*onclick="my_modal_5.showModal()"*/

const wordContainer = document.getElementById("word-container");

const displayLevelWord = (jsonData) => {
  wordContainer.innerHTML = "";

  if (jsonData.length == 0) {
    wordContainer.innerHTML = `
    <div
          class="col-span-full flex items-center justify-center flex-col space-x-2 text-center font-bold"
        >
          <figure><img src="./assets/alert-error.png" alt="" /></figure>
          <p class="hing-siliguri text-md text-gray-500">
           এই <span>Lesson</span> এ এখনো কোন <span>vocabularies</span> যুক্ত করা হয়নি।
          </p>
          <h2 class="mt-3 text-3xl text-blue-400">
            নেক্সট <span>Lesson</span> এ যান
          </h2>
        </div>`;
    return;
  }

  jsonData.forEach((lessonsWord) => {
    const divBox = document.createElement("div");
    divBox.innerHTML = ` <div class="bg-white px-5 py-10 rounded-lg text-center">
          <h3 class="text-2xl font-bold capitalize mb-2">${
            lessonsWord.word ? lessonsWord.word : "শব্দ পাওয়া যায়নি"
          }
</h3>
          <p class="capitalize text-lg font-normalmb-1 font-bold">
            Meaning : <span class="font-normal hing-siliguri">${
              lessonsWord.meaning ? lessonsWord.meaning : "missing word"
            }</span>
          </p>
          <p class="capitalize text-lg font-normalmb-1 font-bold">
            pronunciation : <span class="font-normal hing-siliguri">${
              lessonsWord.pronunciation
                ? lessonsWord.pronunciation
                : "Missing word"
            }</span>
          </p>

         

          <div class="flex items-center justify-between  mt-5 font-semibold">
            <button onclick="loadeWordDeteils(${
              lessonsWord.id
            })"  class="btn border-blue-400 hover:bg-blue-400 transition-all  text-blue-600 hover:text-white"><i class="bi bi-question-circle-fill text-xl cursor-pointer  "></i></button>
            <button class="btn border-blue-400 hover:bg-blue-400 transition-all  text-blue-600 hover:text-white">
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

    btnDiv.innerHTML = `<button
      id="loadLevelWord${itemLessons.level_no}"
      onclick="loadLevelWord(${itemLessons.level_no})"
      class="btn btn-outline border-blue-400 text-blue-400  hover:text-blue-400 hover:bg-white hover:border-blue-400 lessons-btn"
    >
      <i class="bi bi-book-fill"></i>lessons - ${itemLessons.level_no}
    </button>`;

    // !  appendChildloadLevelWord${itemLessons.level_no}
    lavalContainer.appendChild(btnDiv);
  });
};

loadData();
