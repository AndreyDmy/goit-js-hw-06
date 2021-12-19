const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const refList = document.querySelector("#ingredients")
// for (let i = 0; i < ingredients.length; i += 1) {
//   const refEl = document.createElement("li");
//   refEl.textContent = ingredients[i];
//   refEl.classList.add("item");
//   refList.append(refEl);
// }


const ingredientsRef = document.querySelector("#ingredients")
const makeIngredientsList = (elementList) => {
  return elementList.map((ingredientName) => {
    const ingredItemRef = document.createElement("li");
    ingredItemRef.textContent = ingredientName;
    ingredItemRef.classList.add("item");
    return ingredItemRef;
  });
};

const ingredientsList = makeIngredientsList(ingredients);
ingredientsRef.append(...ingredientsList);