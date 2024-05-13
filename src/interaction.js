function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instruction");
  let apiKey = "f12c79ob5a3b7240208d7843e2380dt7";
  let apiPrompt = `User instructions: Generate a recipe for ${instructionsInput.value}`;
  let apiContext =
    "You are a world renowned chef and love sharing your delicious recipes. Your task is to generate the simplest recipe for whichever food or dish the user requests. Please seperate the heading, ingredients, and instructions in seperate sections. Make sure to follow the user instructions.Thank you! ";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${apiPrompt}&context=${apiContext}&key=${apiKey}`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
