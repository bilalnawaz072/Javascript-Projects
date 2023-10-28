function searchRecipe() {
    const query = document.getElementById('search-input').value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(response => response.json())
        .then(data => {
            const meals = data.meals;
            let output = '';

            if (meals) {
                meals.forEach(meal => {
                    output += `
                         <div class="recipe-card" onclick="showMealDetails('${meal.idMeal}')">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <p>${meal.strMeal}</p>
            </div>
                    `;
                });
            } else {
                output = '<p>No recipes found...</p>';
            }

            document.getElementById('recipe-container').innerHTML = output;
        })
        .catch(error => {
            console.error("There was an error fetching the recipes:", error);
        });
}
function showMealDetails(id) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => response.json())
      .then(data => {
          const meal = data.meals[0];
          document.getElementById('mealName').innerText = meal.strMeal;
          document.getElementById('mealImg').src = meal.strMealThumb;
          document.getElementById('mealInstructions').innerText = meal.strInstructions;

              // Get ingredients and measurements
              let ingredients = '';
              for(let i = 1; i <= 20; i++) {
                  const ingredient = meal[`strIngredient${i}`];
                  const measure = meal[`strMeasure${i}`];
                  if(ingredient) {
                      ingredients += `<li>${ingredient} - ${measure}</li>`;
                  }
              }
              document.getElementById('mealIngredients').innerHTML = ingredients;
              
          const videoLink = meal.strYoutube.replace("watch?v=", "embed/");
          document.getElementById('mealVideo').src = videoLink;

          // Display the modal
          const modal = document.getElementById("myModal");
          modal.style.display = "block";
          

          // Get the <span> element that closes the modal
          const span = document.getElementsByClassName("close")[0];

          // When the user clicks on <span> (x), close the modal
          span.onclick = function() {
              modal.style.display = "none";
          }

          // When the user clicks anywhere outside of the modal, close it
          window.onclick = function(event) {
              if (event.target == modal) {
                  modal.style.display = "none";
                  document.body.style.overflow = "none";
              }
          }
      })
      .catch(error => {
          console.error("There was an error fetching the meal details:", error);
      });
}
