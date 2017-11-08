export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';

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