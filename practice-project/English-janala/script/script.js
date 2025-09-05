//! load word function
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

//!  adding synonmFunction
const synonymFunction = (arr) => {
  const htmlElement = arr.map(
    (element) =>
      `<span class=" px-3 py-2 rounded-sm   text-white capitalize  textwhite bg-blue-400 border-blue-400">${element}</span>`
  );
  return htmlElement.join(" ");
};

//  ! lodding spiner

const LoaddingSpiner = (spiner) => {
  if (spiner == true) {
    document.getElementById("loaddingSpinaer").classList.remove("hidden");

    document.getElementById("word-container").classList.add("hidden");
  } else {
    document.getElementById("word-container").classList.remove("hidden");
    document.getElementById("loaddingSpinaer").classList.add("hidden");
  }
};

//!  remove all btn classList = "active"

const removeAtieve = () => {
  const removeActive = document.querySelectorAll(".lessons-btn");
  removeActive.forEach((btn) => {
    btn.classList.remove("active");
  });
};

//  ! load level world
const loadLevelWord = (id) => {
  LoaddingSpiner(true);
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
  displayDeteils(deteils.data);
};

//  display world deteils
const displayDeteils = (word) => {
  const deteilsBox = document.getElementById("deteils_container");
  deteilsBox.innerHTML = "";
  const p = document.createElement("p");
  p.innerHTML = `
   <h2 class="text-3xl font-bold text-blue-400 mb-3 capitalize">${
     word.word
   } (<i class="bi bi-mic-fill"></i> ইগার)</h2> 

  <h3 class="text-xl text-stone-800 font-medium capitalize mb-2
   " >Meaning</h3>
  <p class="text-lg font-normal text-stone-900 hing-siliguri ">${
    word.meaning ? word.meaning : "Missing word"
  }</p>
  
  <h3 class="text-xl text-stone-800 font-medium capitalize mb-2
   ">Example
   </h3>

  <p class="text-lg font-normal text-stone-900 ">${word.sentence}
  </p>
  
<div class="mt-3 ">

<h2 class="text-xl font-medium capitalize mb-3 text-blue-400" >synonym</h2>

<div class="space-x-4 mt-3"> 

<div class="space-x-4  "> 
${synonymFunction(word.synonyms)}
</div>
</div>

</div>`;
  deteilsBox.append(p);
  const modal = document.getElementById("my_modal_5");
  modal.showModal();
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
    LoaddingSpiner(false);
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

  LoaddingSpiner(false);
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

//  ! search btn
const inputSearch = document.getElementById("inputSearch");
const searchBtn = document.getElementById("btn-search");

searchBtn.addEventListener("click", () => {
  const inputSearchValue = inputSearch.value.trim().toLowerCase();

  const url = `https://openapi.programming-hero.com/api/words/all`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const jsonData = json.data;

      const filterWords = jsonData.filter((word) => {
        return word.word.toLowerCase().includes(inputSearchValue);
      });
      displayLevelWord(filterWords);
    });
});
