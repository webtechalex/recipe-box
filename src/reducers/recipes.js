import { ADD_RECIPE, REMOVE_RECIPE, EDIT_RECIPE } from '../actions'

const recipesReducer = (state = [], action) => {
  switch (action && action.type) {
    case ADD_RECIPE:
      return [...state, {name: action.name, ingredients: action.ingredients}];
    case REMOVE_RECIPE:
      return state.filter(recipe => recipe.name !== action.name);
    case EDIT_RECIPE:
      return state.map(recipe => recipe.name == action.id ? {name: action.name, ingredients: action.ingredients} : recipe);
    default:
      return state;
  }
};

export default recipesReducer;