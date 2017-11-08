import { ADD_RECIPE } from '../actions'

const recipesReducer = (state = [], action) => {
  switch (action && action.type) {
    case ADD_RECIPE:
      return [...state, {name: action.name, ingredients: action.ingredients}];
    default:
      return state;
  }
};

export default recipesReducer;