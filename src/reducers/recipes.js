import { ADD_RECIPE, REMOVE_RECIPE, EDIT_RECIPE } from '../actions'

const recipesReducer = (state = [{name: 'n1', ingredients: 'i11, i12, i13'},{name: 'n2', ingredients: 'i21, i22, i23'},{name: 'n3', ingredients: 'i31, i32, i33'}], action) => {
  switch (action && action.type) {
    case ADD_RECIPE:
      return [...state, {name: action.name, ingredients: action.ingredients}];
    case REMOVE_RECIPE:
      return state.filter(recipe => recipe.name !== action.name);
    case EDIT_RECIPE:
      return state.map(recipe => recipe.name == action.prevName ? {name: action.newName, ingredients: action.ingredients} : recipe);
    default:
      return state;
  }
};

export default recipesReducer;