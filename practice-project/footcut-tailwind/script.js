const loadCategoryBtn = () => {
  const btnCategoryApi = `https://taxi-kitchen-api.vercel.app/api/v1/categories`;

  const result = fetch(btnCategoryApi)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      displayLoadCategoryBtn(json.categories);
    });
};

const btnCategory = document.getElementById("btn-category");
const displayLoadCategoryBtn = (json) => {
  btnCategory.innerHTML = "";
  json.forEach((item) => {
    const createBtn = document.createElement("div");
    createBtn.innerHTML = `<button class="btn w-full text-lg capitalize ">
                <img
                  class="w-8 h-8 object-cover rounded-full"
                  src="${item.categoryImg}"
                  alt=""
                />${item.categoryName}
              </button>`;

    btnCategory.appendChild(createBtn);
  });
};

// load food category and item

const foodItemLoadData = () => {
  const foodItemFetch = `https://taxi-kitchen-api.vercel.app/api/v1/foods/random`;
  const resultFoodItem = fetch(foodItemFetch)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      displayFoodItemLoadData(json.foods);
    });
};

const displayFoodItemLoadData = (jsonData) => {
  jsonData.forEach((item) => {});
};
loadCategoryBtn();
foodItemLoadData();
