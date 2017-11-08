export const ADD_RECIPE = 'ADD_RECIPE';

export const addRecipe = (name, ingredients) => {
  return {
    type: ADD_RECIPE,
    name,
    ingredients
  };
};