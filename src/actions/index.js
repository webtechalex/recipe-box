export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';

export const EDIT_RECIPE_NAME = 'EDIT_RECIPE_NAME';
export const EDIT_RECIPE_INGREDIENTS = 'EDIT_RECIPE_INGREDIENTS';

export const addRecipe = (name, ingredients) => {
  return {
    type: ADD_RECIPE,
    name,
    ingredients
  };
};

export const removeRecipe = (name) => {
  return {
    type: REMOVE_RECIPE,
    name
  }
}

export const editRecipe = (prevName, newName, ingredients) => {
  return {
    type: EDIT_RECIPE,
    prevName,
    newName,
    ingredients
  }
}


export const editRecipeName = (name) => {
  return {
    type: EDIT_RECIPE_NAME,
    name
  }
}

export const editRecipeIngredients = (ingredients) => {
  return {
    type: EDIT_RECIPE_INGREDIENTS,
    ingredients
  }
}