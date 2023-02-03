import { API_URL } from "./config";
import { getJSON } from "./helpers";

export const state = {
    recipe: {},
}


export const loadRecipe =  async function(id){

    try{
        
        // const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcebc');
        // console.log(res, data)

        const data = await getJSON(`${API_URL}/${id}`)
    
        const recipe = data.data.recipe;
    
        state.recipe = {
          id: recipe.id,
          title: recipe.title,
          publisher: recipe.publisher,
          sourceUrl: recipe.source_url,
          image: recipe.image_url,
          servings: recipe.servings,
          cookingTime: recipe.cooking_time,
          ingredients: recipe.ingredients
        }
        // console.log(state.recipe)
    }catch(err){
        // console.log(err.message)  
        throw err;
    }



}
