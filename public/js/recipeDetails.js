// select "main", "recipeDetails" and "closeBtn" id
const main = document.getElementById("main");
const recipeDetails = document.getElementById("recipe-details");

const closeBtn = document.getElementById("closeBtn");
// select all "recipe" class
const recipes = document.querySelectorAll(".recipe");

// looping "recipes" for give some click event
recipes.forEach((recipe) => {
    recipe.addEventListener("click", () => {
        // get "data-recipe" from button clicked
        let data = JSON.parse(recipe.getAttribute("data-recipe"));

        // show "recipeDetails" and blur the "main"
        recipeDetails.classList.remove("hidden");
        recipeDetails.classList.add("flex");
        main.classList.add("blur");

        // empty the (".information div div p") innerText
        recipeDetails.querySelector(".information div div p").innerText = "";

        // insert data to frontend
        recipeDetails.querySelector("div div p").innerText = `${data.prepTimeMinutes + data.cookTimeMinutes} min`;
        recipeDetails.querySelector(".information h1").innerText = data.name;
        recipeDetails.querySelector("#recipeImg").style.backgroundImage = `url("${data.image}")`;
        data.ingredients.forEach((ingredient, index) => {
            recipeDetails.querySelector(".information div div p").innerText += ingredient.concat(index < data.ingredients.length - 1 ? ", " : ".");
        });
        recipeDetails.querySelector(".information div div ul").innerHTML = `${data.instructions.map((instruction) => `<li>${instruction}</li>`).join("")}`;
    });
});

// hide "recipeDetails" and show the "main" when "closeBtn" is clicked
closeBtn.addEventListener("click", () => {
    recipeDetails.classList.add("hidden");
    recipeDetails.classList.remove("flex");
    main.classList.remove("blur");
});

// checklist[index].classList.remove("opacity-0");
// checklist[index].style.transition = "all 400ms";
