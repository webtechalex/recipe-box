import { combineReducers } from 'redux';
import InputReducer from './input';
import RecipesReducer from './recipes';

const rootReducer = combineReducers({
  input: InputReducer,
  recipes: RecipesReducer
});

export default rootReducer;