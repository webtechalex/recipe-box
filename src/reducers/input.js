import {EDIT_RECIPE_NAME, EDIT_RECIPE_INGREDIENTS} from '../actions'

const inputReducer = (state = {name: '', ingredients: ''}, action) => {
  switch(action && action.type) {
    default:
      return state;
  }
}

export default inputReducer;