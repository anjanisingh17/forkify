import * as model from './model.js'
import recipeView from './Views/recipeView.js'

import 'core-js/stable'  //for polyfilling 
import 'regenerator-runtime' //for polyfilling asyn function for old browser

// console.log(icons)
// const recipeContainer = document.querySelector('.recipe');





// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////



const controlRecipes = async function () {


  try {

    const id = window.location.hash.slice(1);
    console.log(id)
  
    if(!id) return ;
   recipeView.renderSpinner()

    //Step 1: Loading Recipe
      await model.loadRecipe(id);

    //Step 2 : Rendering Recipe
    recipeView.render(model.state.recipe);


  } catch (err) {
    alert(err)
  }

}
// showRecipe();
window.addEventListener('hashchange',controlRecipes)
window.addEventListener('load',controlRecipes)