import {EDIT_RECIPE_NAME, EDIT_RECIPE_INGREDIENTS} from '../actions'

const inputReducer = (state = {name: '', ingredients: ''}, action) => {
  switch(action && action.type) {
    case EDIT_RECIPE_NAME:
      return Object.assign({}, state, {
        name: action.name
      });
    case EDIT_RECIPE_INGREDIENTS:
      return Object.assign({}, state, {
        ingredients: action.ingredients
      });
    default:
      return state;
  }
}

export default inputReducer;