function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Carrot Cake Recipe",
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
